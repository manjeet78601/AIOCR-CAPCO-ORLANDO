import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@/shared/models/user';

import { environment } from 'environments/environment';
import { UserCredential } from '@/shared/models/user-credential';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    authURL = environment.url_auth_service;

    private currentUserCredentialSubject: BehaviorSubject<UserCredential>;
    public currentUserCredential: Observable<UserCredential>;

    constructor(private http: HttpClient) {
        this.currentUserCredentialSubject = new BehaviorSubject<UserCredential>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUserCredential = this.currentUserCredentialSubject.asObservable();

        if (localStorage.getItem('currentUser')) {
            console.log('retrieving user info from localstorage')
            this.currentUserCredentialSubject.next(JSON.parse(localStorage.getItem('currentUser')));
        }
    }

    public get currentUserCredentialValue() {
        return this.currentUserCredentialSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${this.authURL}/api/auth/user/login`, { 'Email': email, 'password': password })
            .pipe(map(usercred => {
                console.log('user:', usercred)
                // login successful if there's a jwt token in the response
                if (usercred && usercred.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(usercred));
                    this.currentUserCredentialSubject.next(usercred);
                }
                return usercred;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserCredentialSubject.next(null);
    }
}
