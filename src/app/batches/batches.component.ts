import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.scss']
})
export class BatchesComponent implements OnInit {

  @Input() header = '';

  constructor() { }

  ngOnInit(): void {
  }

}
