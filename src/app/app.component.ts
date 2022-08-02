import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-brewery></app-brewery>

  <router-outlet></router-outlet> 
  `,
  styles: []
})
export class AppComponent {

}
