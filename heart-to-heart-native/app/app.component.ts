import { Component } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent { 
    constructor(private fonticon: TNSFontIconService){}
 }
