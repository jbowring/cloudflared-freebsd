import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReleaseComponent} from "./release/release.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReleaseComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
