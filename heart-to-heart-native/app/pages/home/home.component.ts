import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'color';
import { Page } from 'ui/page';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'ns-home',
  templateUrl: './pages/home/home.html',
  styleUrls: ["./pages/home/home-common.css", "./pages/home/home.css"],
  providers: [FirebaseService]
})

export class HomeComponent {
  constructor(
    private page: Page, 
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.page.backgroundColor = new Color("#efefef");
  }

  login() {
    this.firebaseService.login();
  }

  goto(route: string) {
    this.router.navigate([route]);
  }
  
}