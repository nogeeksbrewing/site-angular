import { Component, OnInit } from '@angular/core';
import { Brewery } from '../brewery';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.scss']
})
export class BreweryComponent implements OnInit {

  brewery: Brewery = {
    name: 'No Geeks Brewing',
    location: 'Hoboken, NJ',
    established: 'since 2018',
    email: 'allan@nogeeksbrewing.com',
    pastBatches: 'Archives',
    presentBatches: 'Now Pouring',
    futureBatches: 'Coming Soon'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
