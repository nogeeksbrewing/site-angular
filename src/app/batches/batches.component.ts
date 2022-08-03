import { Component, Input, OnInit } from '@angular/core';

import { Batch } from '../objects';

import * as moment from 'moment';

@Component({
  selector: 'app-batches',
  styles: [`
  .batch-card {
    width: 400px;
    margin: 4px;
  }

  .batches-wrapper {
    background-color: yellow;
  }

  .batches-header {
    background-color: teal;
  }

  .batches-cards {
    background-color: limegreen;
    padding: 4px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
  }
  `],
  template: `
  <div class="batches-wrapper">
    <div class="batches-header">
      <h2>{{header}}</h2>
    </div>
    <div class="batches-cards">
        <mat-card *ngFor='let batch of batches' class="batch-card">
            <mat-card-title>{{batch.name}}</mat-card-title>
            <mat-card-subtitle>{{batch.category}}: {{batch.style}}</mat-card-subtitle>
            <mat-card-content>
              <p>Batch #{{batch.number}}: {{format(batch.date)}}</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button>BATCH</button>
              <button mat-button>RECIPE</button>
          </mat-card-actions>
        </mat-card>
    </div>
  </div>
  `
})
export class BatchesComponent implements OnInit {

  @Input() header = '';

  @Input() batches: Batch[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  format(input: number): string {
    return moment(input).format('MMMM Do, yyyy');
  }

}
