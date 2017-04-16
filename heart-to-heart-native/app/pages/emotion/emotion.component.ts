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
  name: string;
  description: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private page: Page
  ){}

  ngOnInit(): void{
    this.name = this.route.snapshot.params['name'];
    this.description = `This is the ${this.name} page`;
    this.page.backgroundColor = new Color('#88dd66');
  }

  goto(path: string){
    this.router.navigate([path]);
  }
}