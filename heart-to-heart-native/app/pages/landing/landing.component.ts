import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: "ns-landing",
  templateUrl: "./pages/landing/landing.component.html",
  styleUrls: ["./pages/landing/landing-common.css", "./pages/landing/landing.css"]
})

export class LandingComponent {
  constructor(private router: Router){}
  
}