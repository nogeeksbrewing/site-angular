import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryComponent } from './brewery/brewery.component';
import { BatchesComponent } from './batches/batches.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BatchesListComponent } from './batches-list/batches-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweryComponent,
    BatchesComponent,
    BatchesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
