import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BatchesService } from '../batches.service';
import { Batch } from '../objects';

@Component({
  selector: 'app-batches-list',
  template: `
  <div *ngIf="(planned | async) as batches">
    <app-batches [header]="'Coming Soon'" [batches]="batches"></app-batches>
  </div>
  <div *ngIf="(completed | async) as batches">
    <app-batches [header]="'Now Pouring'" [batches]="batches"></app-batches>
  </div>
  <div *ngIf="(archived | async) as batches">
    <app-batches [header]="'Archives'" [batches]="batches"></app-batches>
  </div>
  `,
  styles: [`
  `]
})
export class BatchesListComponent implements OnInit {

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

  /*
    pastBatches: 'Archives',
    presentBatches: 'Now Pouring',
    futureBatches: 'Coming Soon'
  */

}
