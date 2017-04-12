import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MdToolbarModule, MdInputModule, MdButtonModule } from '@angular/material';

// hammerjs used for gesture support
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdInputModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
