import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SimplicityBuilder} from '@simplicitywebtools/simplicity-builder-angular'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimplicityBuilder
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
