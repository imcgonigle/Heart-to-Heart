import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MdToolbarModule, MdInputModule, MdButtonModule, MdCardModule } from '@angular/material';

// hammerjs used for gesture support
import 'hammerjs';

// Firebase
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';

// Firebase config
export const firebaseConfig = {
    apiKey: "AIzaSyA9Fg0a8Xbkp1kiB3bxbR3tCq66eCKSa6I",
    authDomain: "heart-to-heart-d364b.firebaseapp.com",
    databaseURL: "https://heart-to-heart-d364b.firebaseio.com",
    projectId: "heart-to-heart-d364b",
    storageBucket: "heart-to-heart-d364b.appspot.com",
    messagingSenderId: "280293903444"
  };

  export const FirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

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
    MdButtonModule,
    MdCardModule,
    AngularFireModule.initializeApp(firebaseConfig, FirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
