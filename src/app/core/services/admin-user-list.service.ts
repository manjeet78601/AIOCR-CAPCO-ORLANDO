import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'environments/environment';
import { User } from '@/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminUserListService {

  baseURL = environment.url_auth_service;
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.post<any>(this.baseURL + '/api/auth/user/listAll', '');
  }
  getDisabledUsers() {
    return this.http.post<any>(this.baseURL + '/api/auth/user/listDisabled', '');
  }
  getEnabledUsers() {
    return this.http.post<any>(this.baseURL + '/api/auth/user/listEnabled', '');
  }
  toggleUsers(users) {
    console.log(users);
    return this.http.post<any>( this.baseURL + '/api/auth/user/setEnabled', users);
  }

}