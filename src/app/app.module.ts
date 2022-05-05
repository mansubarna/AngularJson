import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StepsComponent } from './steps/steps.component';
import { LoadjsonComponent } from './loadjson/loadjson.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    LoadjsonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
