import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcessingLogsService {

  baseURL = environment.url_processing_logs_api;
  
  constructor(private http: HttpClient) { }

  getLogsByOcr(ocrId) {
    return this.http.get(this.baseURL + '/api/log/log/get?id=' + ocrId.ocrreturn_id );
  }

  getLogsByDocument(documentId) {
    return this.http.get(this.baseURL + '/api/log/log/get?id=' + documentId.document_id );
  }

  getLogsByFs(fsId) {
    return this.http.get(this.baseURL + '/api/log/log/fs?id=' + fsId.fs_id );
  }

  getLogsByDateRange(dateRange) {
    return this.http.get(this.baseURL + '/api/log/log/list', { responseType: 'json'});
  }
}
