import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator, matchingPasswords } from '@/shared//validators/validators';
import { RegistrationService } from '@/core/services/auth/registration.service';
import { first } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MessageDialogComponent } from '@/shared/components/message-dialog/message-dialog.component';
import { User } from '@/shared/models/user';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { template } from '@angular/core/src/render3';
import { UserService } from '@/core/services/user.service';
import {environment} from 'environments/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  version: String = environment.version
  mode: Boolean = environment.production
  host: String = environment.url_correction_service
  build: String;

 header: {};
 registrationForm: FormGroup;
  isLoading: boolean = false;
  successMessage: string;
  errorMessage: string;
  success: boolean = false;
  error: string = '';
  returnUrl: string;
  //errorList: string[];
  // modalMessage: string;







  constructor(public fb: FormBuilder,
    private router: Router,
    private rs: RegistrationService,
    private config: RegistrationService,
     private modalService: BsModalService,
    private userService: UserService
    ) {
    // Example use of FormBuilder, FormGroups, and FormControls
    this.registrationForm = fb.group({
      Email: ['', Validators.compose([Validators.required,  emailValidator])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required]

    }, {validator: matchingPasswords('password', 'confirmPassword')}
    );
  }



  modalRef: BsModalRef;
  @ViewChild('template') modal: TemplateRef<any>;
  @ViewChild('template1') modal1: TemplateRef<any>;

  submitRegistration(user: Object): void {

    console.log(user);
    this.rs.register(user)
      .pipe(first())
      .subscribe(
        data => {
          // const routerTest = this.router;
          // let successMessage = data.message + " You will be redirected momentarily.";
          // this.message = successMessage;
          // setTimeout(function(){
          //   routerTest.navigate(["/"]);
          // }, 6000);
           if (data.status === 'success') {
            //  debugger
            this.success = true;
            this.modalRef = this.modalService.show(this.modal);
            this.router.navigate([this.returnUrl]);
            //  setTimeout(() => this.successMessage = false, 4000);
            // const routerTest = this.router;
              this.successMessage = data.message + 'Your account is pending activation by an administrator.';
          }


        },

        error => {
          // debugger
          // this.modalRef = this.modalService.show(this.modal);
          this.errorMessage = error;
           this.isLoading = false;
           this.modalRef = this.modalService.show(this.modal1);

//  this.errorList = [];

//  for(var i = 0; i < error.error.value.length; i++)
//  {
//    this.errorList.push(error.error.value[i]);
//   //  console.log(error.error.value[i]);
//  }
//  console.log(error)


          // this.modalMessage = 'User already registered';

        });






  }

  ngOnInit() {
    this.header = this.getHeader();
    // this.errorList = [];

  }

   getHeader() {
     return this.config.getconfig().header;
   }

    close() {
     this.modalRef.hide();
     this.registrationForm.reset();

        }
  }





