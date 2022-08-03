import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreweryService } from '../brewery.service';
import { Brewery } from '../objects';

@Component({
  selector: 'app-brewery',
  template: `
  <div *ngIf="(brewery | async) as brewery" id="brewery-container">
    <header>
      <h1>{{brewery.name}}</h1>
    </header>
    <main>
      <section><app-batches-list></app-batches-list></section>
    </main>
    <footer>
      <div id="brewery-footer-wrapper">
        <div id="brewery-bottom-left"><h5>{{brewery.location}}</h5></div>
        <div id="brewery-bottom-middle"><h5><a href="mailto:{{brewery.contact}}">{{brewery.contact}}</a></h5></div>
        <div id="brewery-bottom-right"><h5>{{brewery.info}}</h5></div>
      </div>
    </footer>
  </div>
  `,
  styles: [`
    #brewery-container {
      display: flex; /* displays flex-items (children) inline */
      flex-direction: column; /* stacks them vertically */
      height: 100%; /* needs to take the parents height, alternative: body {display: flex} */
    }
    
    main {
      height: 100%;
      flex: 1; /* takes the remaining height of the "container" div */
      overflow: auto; /* to scroll just the "main" div */
      //background: #585858;
    }
    
    section {
      overflow: auto; /* recommended */
    }
    
    header {
      //background: #383838;
      text-align: center;
    }
    
    footer {
      //color: #F5F5F5;
      //background: #383838;
    }
    
    #brewery-footer-wrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content:  space-between;
      align-items: stretch;
    }
    
    #brewery-bottom-left {
      text-align: left;
      padding-left: 16px;
    }
    
    #brewery-bottom-middle {
      text-align: center;
    }
    
    #brewery-bottom-right {
      text-align: right;
      padding-right: 16px;
    }
    `
  ]
})
export class BreweryComponent implements OnInit {

  brewery: Observable<Brewery>;

  constructor(private breweryService: BreweryService) {
    this.brewery = breweryService.brewery();
  }

  ngOnInit(): void {

  }

}
