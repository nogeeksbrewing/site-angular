import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Brewery, BREWERY } from './objects';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  constructor() { }

  brewery(): Observable<Brewery> {
    return of(BREWERY);
  }

}
