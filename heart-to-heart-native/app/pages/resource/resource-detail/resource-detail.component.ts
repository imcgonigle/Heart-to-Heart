import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Resource } from '../resource';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'ns-emotion',
  templateUrl: './pages/resource/resource-detail/resource-detail.html',
  styleUrls: ['./pages/resource/resource-detail/resource-detail.css', './pages/resource/resource-detail/resource-detail.css'],
  providers: [ResourceService]
})

export class ResourceDetailComponent {
  resourceID: number;
  resource: Resource;

  constructor(
    private resourceService: ResourceService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.resourceID = this.route.snapshot.params['id'];
    this.resource = this.resourceService.getResource(this.resourceID);
  }
}