import { Component, OnInit } from '@angular/core';
import { Brewery } from '../brewery';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.styl']
})
export class BreweryComponent implements OnInit {

  brewery: Brewery = {
    name: 'no geeks brewing',
    location: 'hoboken, nj',
    established: 'since 2018'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
