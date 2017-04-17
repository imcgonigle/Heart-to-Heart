import {Injectable, NgZone} from "@angular/core";
import { BackendService } from "./backend.service";
import firebase = require("nativescript-plugin-firebase");
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {UtilsService} from './utils.service';
import 'rxjs/add/operator/share';

@Injectable()
export class FirebaseService {

  constructor(
    private ngZone: NgZone,
  ){}

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

  // getResources(emotion: string, type: string): Observable<any> {
  //   return new Observable((observer: any) => {
      
  //     var onQueryEvent = function(result) {
  //         console.log("Result: " + result)
  //         if (!result.error) {
  //             for(let index in result.value) {
  //               observer.next(result['value'][index])
  //             }
  //         }
          
  //     };

  //     var queryLocation = `/resources/${emotion}/${type}`
  //     firebase.query(
  //         onQueryEvent,
  //         queryLocation,
  //         {
  //             singleEvent: true,
  //             orderBy: {
  //                 type: firebase.QueryOrderByType.CHILD,
  //                 value: 'since'
  //             },
  //             limit: {
  //                 type: firebase.QueryLimitType.LAST,
  //                 value: 10
  //             }
  //         }
  //     ).then( data => {
  //       // for( let resource of data) {
  //       //   console.log("Resource: " + resource);
  //       //   // observer.next(data.value[resource]);
  //       // }
  //       console.log("response is here: " + JSON.stringify(data))
  //     }).catch(error => {
  //       console.log("Error: " + error);
  //       alert(error);
  //     })

  //   }).share()
  // }

}