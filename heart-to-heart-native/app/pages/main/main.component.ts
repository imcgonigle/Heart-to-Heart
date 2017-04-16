import { Component, OnInit } from '@angular/core';
import { Color } from 'color';
import { Page } from 'ui/page';

@Component({
  selector: 'ns-main',
  templateUrl: './pages/main/main.html',
  styleUrls: ["./pages/main/main-common.css", "./pages/main/main.css"]
})

export class MainComponent {
  constructor(private page: Page) {}
  ngOnInit() {
    this.page.backgroundColor = new Color("#efefef");
  }
}