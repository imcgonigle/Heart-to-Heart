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
    console.log("logging in")
    return firebase.login({
      type: firebase.LoginType.GOOGLE
    }).then((result: any) => {
      console.log("logged in");
      BackendService.token = result.uid;
      return JSON.stringify(result);
    }).catch((error) => {
      console.log("error logging in. ", error)
      alert(error);
    })
  }

}