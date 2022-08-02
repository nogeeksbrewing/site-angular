import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BatchesService } from '../batches.service';
import { Brewery } from '../brewery';
import { Batch } from '../objects';

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

  planned: Observable<Batch[]>;
  completed: Observable<Batch[]>;
  archived: Observable<Batch[]>;

  constructor(private batchesService: BatchesService) {
    this.planned = batchesService.planned();
    this.completed = batchesService.completed(); 
    this.archived = batchesService.archived();
  }

  ngOnInit(): void {

  }

}
