import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BatchesService } from '../batches.service';
import { BreweryService } from '../brewery.service';
import { Batch, Brewery } from '../objects';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.scss']
})
export class BreweryComponent implements OnInit {

  planned: Observable<Batch[]>;
  completed: Observable<Batch[]>;
  archived: Observable<Batch[]>;
  brewery: Observable<Brewery>;

  constructor(private batchesService: BatchesService, 
              private breweryService: BreweryService) {

    this.planned = batchesService.planned();
    this.completed = batchesService.completed(); 
    this.archived = batchesService.archived();
    this.brewery = breweryService.brewery();
  }

  ngOnInit(): void {

  }

}
