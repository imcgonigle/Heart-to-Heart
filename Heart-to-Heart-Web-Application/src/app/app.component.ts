import { Component } from '@angular/core';
// AngularFire2 
import { AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heart to Heart';
  user: Object;
  items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire){
    this.items = af.database.list('/items');

    af.auth.subscribe(user => {
      if (user) {
        this.user = user;
      } 
      else {
        this.user = undefined;
      }
    })
  }

  login() {
    this.af.auth.login()
  }

  logout() {
    this.af.auth.logout();
  }
}