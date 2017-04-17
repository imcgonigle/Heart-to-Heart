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

  getResources(emotion: string, type: string) {
    var onQueryEvent = function(result) {
        // note that the query returns 1 match at a time
        // in the order specified in the query
        if (!result.error) {
            console.log("Event type: " + result.type);
            console.log("Key: " + result.key);
            console.log("Value: " + JSON.stringify(result.value));
        }
    };

    var queryLocation = `/resources/${emotion}/${type}`
    firebase.query(
        onQueryEvent,
        queryLocation,
        {
            singleEvent: true,
            orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'since'
            },
            limit: {
                type: firebase.QueryLimitType.LAST,
                value: 10
            }
        }
    ).then( data => {
      console.log(JSON.stringify(data.value))
    }).catch(error => {
      console.log("Error: " + error);
      alert(error);
    })
  }

}