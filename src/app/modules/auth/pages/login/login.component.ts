import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegistrationService } from '@/core/services/auth/registration.service';
import { AuthenticationService } from '@/core/services/auth/authentication.service';
import { environment } from 'environments/environment';
@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  version : String = environment.version
  mode : Boolean = environment.production
  host : String = environment.url_correction_service
  build : String;

    title1 = 'Login';
    header: {};
    loginForm: FormGroup;
    isLoading: boolean = false;
    submitted = false;
    returnUrl: string;
    error: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private config: RegistrationService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();


        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/content/tasks';


{
          this.header = this.getHeader();
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    login() {

        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.isLoading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.isLoading = false;
                    console.log(error);
                });
    }


     getHeader() {
       return this.config.getconfig().header;
     }
}
