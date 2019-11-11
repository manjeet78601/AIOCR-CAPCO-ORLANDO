import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@/shared/models/user';

import { environment } from 'environments/environment';
import { Register } from '@/modules/register';
import { configuration } from 'configuration';



@Injectable({ providedIn: 'root' })
export class RegistrationService {
    authURL = environment.url_auth_service;
    reg = Register;
    config = configuration;


    constructor(private http: HttpClient) {}

    getconfig() {
      return this.config;
     }

    register(user: Object) {
        return this.http.post<any>(`${this.authURL}/api/auth/user/register`, user)
            .pipe(map(reply => {
                console.log('reply:', reply);
                return reply;
            }));
          }
          getReg() {
            return this.register;
          }



}
