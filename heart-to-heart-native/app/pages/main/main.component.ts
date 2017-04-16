import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'color';
import { Page } from 'ui/page';

@Component({
  selector: 'ns-main',
  templateUrl: './pages/main/main.html',
  styleUrls: ["./pages/main/main-common.css", "./pages/main/main.css"]
})

export class MainComponent {
  constructor(private page: Page, private router: Router) {}
  ngOnInit() {
    this.page.backgroundColor = new Color("#efefef");
  }

  goto(route: string) {
    this.router.navigate([route]);
  }
  
}