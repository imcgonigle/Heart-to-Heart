import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from 'ui/page';
import { Color } from 'color';

@Component({
  selector: 'ns-emotion',
  templateUrl: './pages/emotion/emotion.html',
  styleUrls: ['./pages/emotion/emotion.css', './pages/emotion/emotion-common.css']
})

export class EmotionComponent {
  emotions: any = {
    relaxing: {
      title: "Relax",
      description: "Here you can relax and unwind, if you are upset or just looking to be calm.",
      path: '/resources/relaxing/'
    },
    happy: {
      title: "Happy",
      description: "Here you can watch videos and look at pictures to make you happy.",
      path: '/resources/happy/'
    },
    satisfying: {
      title: "Satisfying",
      description: "Here you can see videos and pictures that will satisfy your heart.",
      path: '/resources/satisfying/'
    }
  }
  emotion: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private page: Page
  ){}

  ngOnInit(): void{
    this.emotion = this.emotions[this.route.snapshot.params['name']];
    this.page.backgroundColor = new Color('#88dd66');
  }

  goto(path: string){
    this.router.navigate([path]);
  }
}