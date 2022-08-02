import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreweryService } from '../brewery.service';
import { Brewery } from '../objects';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.scss']
})
export class BreweryComponent implements OnInit {

  brewery: Observable<Brewery>;

  constructor(private breweryService: BreweryService) {
    this.brewery = breweryService.brewery();
  }

  ngOnInit(): void {

  }

}
