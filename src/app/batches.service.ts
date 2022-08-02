import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Batch } from './objects';
import { BATCHES } from './objects';

@Injectable({
  providedIn: 'root'
})
export class BatchesService {

  constructor() { }

  planned(): Observable<Batch []> {
    return of(BATCHES);
  }

  completed(): Observable<Batch []> {
    return of([]);
  }

  archived(): Observable<Batch []> {
    return of([]);
  }

}
