import {Injectable, NgZone} from "@angular/core";
import { BackendService } from "./backend.service";
import firebase = require("nativescript-plugin-firebase");
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {UtilsService} from './utils.service';
import 'rxjs/add/operator/share';

@Injectable()
export class FirebaseService {

  constructor(){}

  login() {
    return firebase.login({
      type: firebase.LoginType.ANONYMOUS
    }).then((result: any) => {
      BackendService.token = result.uid;
      return JSON.stringify(result);
    }).catch((error) => {
      alert(error);
    })
  }

  logout() {
    BackendService.token = '';
    firebase.logout();
  }

}