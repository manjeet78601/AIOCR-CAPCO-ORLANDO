import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorrectionService {

  baseURL = environment.url_correction_service + '/api';
  constructor(private http: HttpClient) { }

  nextItem() {
    return this.http.get( this.baseURL + '/fetchdocument');
  }
  getImage(image) {
    let params = new HttpParams().set('file', '/' + image);
    return this.http.get(this.baseURL + '/img/data', { responseType: 'blob', params: params });
  }
  sendCorrection(data) {
    return this.http.post(this.baseURL + '/update_value', data);
  }
}
