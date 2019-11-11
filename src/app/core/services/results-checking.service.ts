import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'environments/environment';

import { ResultId } from '@/shared/models/resultId'

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResultsCheckingService {

  baseURL = environment.url_correction_service + '/api/checking';

  isSelected = new BehaviorSubject(false);
  isSelected$ = this.isSelected.asObservable();

  private resultId = new BehaviorSubject(new ResultId);
  resultId$ = this.resultId.asObservable();

  private resultJson = new BehaviorSubject({});
  resultJson$ = this.resultJson.asObservable();
  
  constructor(private http: HttpClient) { }

  getTrustResults() {
    return this.http.get(this.baseURL + '/gettrusts');
  }

  getHighResults() {
    return this.http.get(this.baseURL + '/getconf?file_exts=pdf&type=high');
  }

  getLowResults() {
    return this.http.get(this.baseURL + '/getconf?file_exts=pdf&type=low');
  }

  getResultData(resultId : ResultId) {
    console.log('getResultData', resultId)
    this.isSelected.next(true);
    this.resultId.next(resultId);
    
    this._getResultJson(resultId)
      .subscribe( resp => this.resultJson.next(resp) )   
  }

  getHighLowResultData(resultId : ResultId, type) {
    console.log('getHighLowData', resultId)

    this.isSelected.next(true);

    this.resultId.next(resultId);
    this._getHighLowResultJson(resultId, type)
      .subscribe( resp => this.resultJson.next(resp) )   
  }

  getUrlPDF(resultId : ResultId) {
    return this.baseURL + '/getactionfile?filename=' + resultId.filename + '&fsid=' + resultId.fs_id
  }

  getListPng() {
    return this.http.get(this.baseURL + '/allpnglist')
  }

  getUrlPng(resultId : ResultId) {
    return this.baseURL + '/getactionfile?filename=' + resultId.filename + '&fsid=' + resultId.fs_id
  }

  getBase64Pngs(resultId : ResultId) {
    return this.http.get(this.baseURL + '/getimgsbase64?fsid=' + resultId.fs_id)
  }

  getSimplifiedJson(detailed) {
    let simplified = [];
    for (let page of detailed) {
      let items = [];
      for (let item of page['json']) {
        if(item.hasOwnProperty('value')){
          items.push(this._removeSpacesIfaNumber(item['value']))
        }
      }
      simplified.push(Array.from(new Set(items)));
    }
    console.log('simp:', simplified);
    return simplified;
  }

/*   getSimplifiedTrustJson(detailed) {
    let simplified = [];
    for (let page of detailed) {
      let items = [];

      let p = page['json']['decision'];
      if(p.hasOwnProperty('value')){
        items.push(this._removeSpacesIfaNumber(p['value']))
      }
      if(p.hasOwnProperty('trustee') && p['trustee'] != null){
        items.push(this._removeSpacesIfaNumber(p['trustee']))
      }

      simplified.push(Array.from(new Set(items)));
    }
    console.log('simp:', simplified);
    return simplified;
  } */

  private _removeSpacesIfaNumber(input) {
    let test = input.replace(/\s+/g, '');
    if (!isNaN(test)) { // if is a number
      return test;
    }
    return input;
  }

  private _getJsonHeader() {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    }); 
    let options = {
      headers: httpHeaders
    }
    return options;
  }

  private _getResultJson(resultId : ResultId) {
    return this.http.post(this.baseURL + '/getactiondecision', JSON.stringify(resultId), this._getJsonHeader());
  }

  private _getHighLowResultJson(resultId : ResultId, type) {
    const reqData = {
      'fs_id': resultId.fs_id,
      'type': type
    }
    return this.http.post(this.baseURL + '/getconfdecision', reqData, this._getJsonHeader());
  }
 
  postRating(ratingObj) {
      return this.http.post(this.baseURL + '/user_update', JSON.stringify(ratingObj), this._getJsonHeader());
  }

  reset() {
    this.isSelected.next(false);
  }
}

