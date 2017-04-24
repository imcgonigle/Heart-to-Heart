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

  pages: any = {
    relax: {
      title: "Relax",
      description: "Here you can relax and unwind, if you are upset or just looking to be calm"
    },
    happy: {
      title: "Happy",
      description: "Here you can watch videos and look at pictures to make you happy."
    },
    Satisfying: {
      title: "Satisfying",
      description: "Here you can see videos and pictures that will satisfy your heart."
    }
  }

  constructor(
    private page: Page, 
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  login() {
    this.firebaseService.login();
  }

  goto(route: string) {
    this.router.navigate([route]);
  }
  
}