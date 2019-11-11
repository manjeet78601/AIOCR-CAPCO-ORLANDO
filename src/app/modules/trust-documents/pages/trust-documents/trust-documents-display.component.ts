import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultsCheckingService } from '@/core/services/results-checking.service';

import { ResultId } from '@/shared/models/resultId';
import { ResultData } from '@/shared/models/resultData';
import { AuthenticationService } from '@/core/services/auth/authentication.service'

@Component({
  selector: 'app-trust-documents-display',
  templateUrl: './trust-documents-display.component.html',
  styleUrls: ['./trust-documents-display.component.scss']
})
export class TrustDocumentsDisplayComponent implements OnInit {

  private resultId : ResultId = new ResultId();
  resultJson : any;
  simplifiedJson: any;
  urlPDF: string = null;

  base64PNGs = [];
  pagesPNG : number = 0;

  resultsCheckingForm: FormGroup;
  resultsCheckingFormIsValid: boolean = false;
  formSubmitted: boolean = false;
  submitSuccess: boolean = null;

  loading : boolean = true;
  isDetailed : boolean = false;

  imgClicked: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private resultsCheckingService: ResultsCheckingService,
    private authService: AuthenticationService
  ) {
      this.resultsCheckingService.resultId$
        .subscribe( resultId => {
          this.resultId = resultId;
          let ext = resultId['filename'].substr(resultId['filename'].lastIndexOf('.') + 1);
          if (ext.toLowerCase() === 'pdf') {
            this.urlPDF = this.resultsCheckingService.getUrlPDF(resultId);
          } else {
            this.resultsCheckingService.getBase64Pngs(resultId).subscribe(res => {

              if (Array.isArray(res)) {
                this.pagesPNG = res.length;
                this.base64PNGs = res;
              }

            })
          }

        })

        this.resultsCheckingService.resultJson$
        .subscribe( resultJson => {
          this.resultJson = resultJson;
          this.simplifiedJson = this.resultsCheckingService.getSimplifiedJson(resultJson);
        })
  }


  ngOnInit() {
    this.loading = false

    this.resultsCheckingForm = this.formBuilder.group({
      jsonRating: ['', Validators.required],
      failReasons: ['']
    });

    this.resultsCheckingForm.get('jsonRating').valueChanges
      .subscribe(value => {
        const failReasonsControl = this.resultsCheckingForm.get('failReasons');
        if (value == '3') {
          failReasonsControl.setValidators([Validators.required, Validators.minLength(3)]);
          failReasonsControl.updateValueAndValidity();
        } else {
          failReasonsControl.clearValidators();
          failReasonsControl.updateValueAndValidity();
          failReasonsControl.reset();
        }
      });

    this.resultsCheckingForm.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.resultsCheckingFormIsValid = true
      } else {
        this.resultsCheckingFormIsValid = false;
      }
    });
  }

  submit() {
    const postData = {
      'fs_id': this.resultId.fs_id,
      'filename': this.resultId.filename,
      'value': this.resultsCheckingForm.value.jsonRating,
      'user_id': this.authService.currentUserCredentialValue.user.id,
      'comment':this.resultsCheckingForm.value.failReasons
    }
    this.resultsCheckingService.postRating(postData)
      .subscribe((res) => {
        console.log(res);
        this.formSubmitted = true;
        this.submitSuccess = true;
        this.exit();
        },
        (error) =>  {
          this.formSubmitted = true;
          this.submitSuccess = false;
          console.log(error);
        }
      );
  }

  exit() {
    this.resultsCheckingService.reset();
  }

  displayImage(strBase64 : string) {
    return 'data:image/png;base64,' + strBase64;
  }

  imgZoom() {
    this.imgClicked = !this.imgClicked;
  }

}
