import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'environments/environment';

import { Observable, of } from 'rxjs';
import { Task } from '@/shared/models/task';
import { TASKS } from '@/shared/models/mock-tasks';

@Injectable({ providedIn: 'root' })
export class TaskService {

  baseURL = environment.url_correction_service;
  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
}
