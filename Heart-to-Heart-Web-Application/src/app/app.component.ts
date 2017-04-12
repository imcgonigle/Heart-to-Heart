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
  resources: FirebaseListObservable<any[]>;
  model = { user: undefined };

  constructor(public af: AngularFire){
    this.resources = af.database.list('/resources');

    af.auth.subscribe(user => {
      if (user) {
        this.user = user;
        this.model.user = user.google.email;
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

  addResource() {
    let newResource = this.model;
    this.resources.push(newResource);
  }

  deleteResource(resource: any) {
    this.resources.remove(resource);
  }
}