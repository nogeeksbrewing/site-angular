import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Batch } from './objects';
import { PLANNING, COMPLETED } from './objects';

@Injectable({
  providedIn: 'root'
})
export class BatchesService {

  constructor() { }

  planned(): Observable<Batch []> {
    return of(PLANNING);
  }

  completed(): Observable<Batch []> {
    return of(COMPLETED);
  }

  archived(): Observable<Batch []> {
    return of([]);
  }

}
