import { Component } from '@angular/core';
// AngularFire2 
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heart to Heart';
  items: FirebaseListObservable<any>
  constructor(af: AngularFire ){
    this.items = af.database.list('/items');
  }
}
