import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryComponent } from './brewery/brewery.component';
import { BatchesComponent } from './batches/batches.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweryComponent,
    BatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
