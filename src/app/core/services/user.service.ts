import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/shared/models/user';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

    apiUrl = '';
    constructor(private http: HttpClient) { }
// user register page
    // postUser(user: User) {
    //   this.http.post(environment.url_auth_service + '/register', user);
    // }

    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }
}
