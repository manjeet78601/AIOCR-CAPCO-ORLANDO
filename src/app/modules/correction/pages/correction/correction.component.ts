import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CorrectionService } from '@/core/services/correction.service';
import { AuthenticationService } from '@/core/services/auth/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'correction-form',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.scss']
})
export class CorrectionComponent implements OnInit {

  formIsValid: boolean;
  loading = true;
  ocrText: string;
  imgURL: string | ArrayBuffer;
  imgWidth = 0;
  ocrReturnID = null;

  hMargin = 30;  // TODO: system settings
  wMargin = 30;

  queueForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthenticationService,
    private queue: CorrectionService,
    private router:  Router
    ) { }

  ngOnInit() {
    this.queueForm = this.formBuilder.group({
      dataCorrect: ['', Validators.required],
      correctedInput: '',
      //useForTraining: ['', Validators.required],
      weight: ''
    });
    this.newQueueItem();
  }

/*   @ViewChild("correctedInput") nameField: ElementRef;
  editCorrectedInput(): void {
    this.nameField.nativeElement.focus();
  }
 */
  setForm(ocrText) {
    this.queueForm = this.formBuilder.group({
      isConcur: ['', Validators.required],
      correctedInput: ocrText,
      // useForTraining: ['', Validators.required],
      weight: ['', Validators.required]
    });
    this.queueForm.get('isConcur').valueChanges.subscribe(
      (isConcur: string) => {
        // console.log(correct);
        if (isConcur === 'false') {
          this.queueForm.get('correctedInput').setValidators([Validators.required]);
          this.queueForm.get('correctedInput').updateValueAndValidity();
        } else if (isConcur === 'true') {
          this.queueForm.get('correctedInput').clearValidators();
          this.queueForm.get('correctedInput').updateValueAndValidity();
        } else {
          this.queueForm.get('weight').clearValidators();
          this.queueForm.get('weight').updateValueAndValidity();
        }
      }
    );
    // this.queueForm.get('useForTraining').valueChanges.subscribe(
    //   (train: string) => {
    //     // console.log(correct);
    //     if (train === 'true') {
    //       this.queueForm.get('weight').setValidators([Validators.required]);
    //       this.queueForm.get('weight').updateValueAndValidity();
    //     } else {
    //       this.queueForm.get('weight').clearValidators();
    //       this.queueForm.get('weight').updateValueAndValidity();
    //     }
    //   }
    // );
    this.queueForm.statusChanges.subscribe((status) => {
      // console.log(status);
      status === 'VALID'
        ? this.formIsValid = true
        : this.formIsValid = false;
    });
  }

  newQueueItem() {
    this.queue.nextItem().subscribe(
      (data: any) => {
        console.log(data);
        this.ocrText = data.text;
        this.ocrReturnID = data.ocrreturn_id;
        console.log('ocrText:', this.ocrText)
        this.setForm(this.ocrText);
        this.queue.getImage(data.filename.slice(1)).subscribe((blob: Blob) => {
          const reader = new FileReader();
          const img = document.createElement('img');
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            const base64data = reader.result;
            // @ts-ignore
            img.src = base64data;
          };
          this.setImage(img, data)
        });
      },
      (error) => console.log(error)
    );
  }

  getImgWidth() {
    return this.imgWidth;
  }

  setImage(img, data) {
    return img.onload = () => {
      const cnv1 = document.createElement('canvas');
      const ctx1 = cnv1.getContext('2d');

      var x1 = data.box[0];
      var y1 = data.box[1] ;
      var w = data.box[2] + this.wMargin;
      var h = data.box[3] + this.hMargin;

      this.imgWidth = w;

      ctx1.drawImage(img, x1, y1 - h, w, h, 0, 0, w, h);

      const imgData = cnv1.toDataURL('image/png');
      this.imgURL = imgData;
      this.loading = false;
    };
  }

  isTrue(field) : boolean {
      return field === 'true' ? true : false;
  }

  submit() {
    console.log(this.queueForm.value);
    this.loading = true;
    this.formIsValid = false;
    const data = {
      'updated_text': this.isTrue(this.queueForm.value.isConcur) ? null : this.queueForm.value.correctedInput,
      'concur': this.isTrue(this.queueForm.value.isConcur) ? 1 : 0,
      'ocrreturn_id': this.ocrReturnID,
      'user_id': this.authservice.currentUserCredentialValue.user.id,
      'isDiscarded': this.queueForm.value.isConcur === 'discard' ? 1 : 0,
      'weight': this.queueForm.value.weight
    };
    console.log('submitting...', data)
    this.queue.sendCorrection(data).subscribe(
      res => {
        console.log(res);
        this.newQueueItem();
      },
      err => console.log(err)
    );
  }
  redirect() {
  this.router.navigate(['/content/tasks']);


}
}

