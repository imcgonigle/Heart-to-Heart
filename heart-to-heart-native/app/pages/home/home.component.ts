import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'color';
import { Page } from 'ui/page';

@Component({
  selector: 'ns-home',
  templateUrl: './pages/home/home.html',
  styleUrls: ["./pages/home/home-common.css", "./pages/home/home.css"]
})

export class HomeComponent {
  constructor(
    private page: Page, 
    private router: Router
  ) {}
  
  ngOnInit() {
    this.page.backgroundColor = new Color("#efefef");
  }

  goto(route: string) {
    this.router.navigate([route]);
  }
  
}