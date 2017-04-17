import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Page } from 'ui/page';
import { Color } from 'color';

import { Resource } from '../resource';
import { ResourceService } from '../resource.service';

import firebase = require("nativescript-plugin-firebase");

import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'ns-emotion',
  templateUrl: './pages/resource/resource-list/resource-list.html',
  styleUrls: ['./pages/resource/resource-list/resource-list-common.css', './pages/resource/resource-list/resource-list.css'],
  providers: [ResourceService, FirebaseService]
})

export class ResourceListComponent {
  emotion: string;
  section: string;
  title: string;
  resources: Resource[];
  fbRes = [];


  constructor(
    private page: Page,
    private route: ActivatedRoute,
    private router: Router,
    private resourceService: ResourceService,
    private firebaseService: FirebaseService
  ){}

  ngOnInit(): void {
    this.emotion = this.route.snapshot.params['emotion'];
    this.section = this.route.snapshot.params['section'];

    this.title = `Here are some ${this.emotion} ${this.section}.`;
    this.resources = this.resourceService.getResources(this.section == 'videos' ? 'video' : 'picture' , this.emotion);

    this.fbGet();

    this.page.backgroundColor = new Color('#333333');
  }

  fbGet() {
    var onChildEvent = (result) => {
      console.log("result: " + JSON.stringify(result.value));
      this.fbRes.unshift(result.value);
    }
    firebase.addChildEventListener(onChildEvent, "/resources/happy/videos")
      .then( listenerWrapper => {
        var path = listenerWrapper.path;
        var listeners = listenerWrapper.listeners;
      })
  }
}