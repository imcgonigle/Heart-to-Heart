import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Page } from 'ui/page';
import { Color } from 'color';

import { Resource } from '../resource';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'ns-emotion',
  templateUrl: './pages/resource/resource-list/resource-list.html',
  styleUrls: ['./pages/resource/resource-list/resource-list-common.css', './pages/resource/resource-list/resource-list.css'],
  providers: [ResourceService]
})

export class ResourceListComponent {
  emotion: string;
  section: string;
  title: string;
  resources: Resource[];


  constructor(
    private page: Page,
    private route: ActivatedRoute,
    private router: Router,
    private resourceService: ResourceService
  ){}

  ngOnInit(): void {
    this.emotion = this.route.snapshot.params['emotion'];
    this.section = this.route.snapshot.params['section'];

    this.title = `Here are some ${this.emotion} ${this.section}.`;
    this.resources = this.resourceService.getResources('video');

    this.page.backgroundColor = new Color('#333333');
  }
}