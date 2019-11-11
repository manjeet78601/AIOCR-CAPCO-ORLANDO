import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


import { AuthenticationService } from '@/core/services/auth/authentication.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUserCredential = this.authenticationService.currentUserCredentialValue;
        if (currentUserCredential && currentUserCredential.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUserCredential.token}`
                }
            });
        }

        return next.handle(request);
    }
}
