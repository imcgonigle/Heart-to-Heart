import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-emotion',
  templateUrl: './pages/emotion/emotion.html',
  styleUrls: ['./pages/emotion/emotion.css', './pages/emotion/emotion-common.css']
})

export class EmotionComponent {
  name: string;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    this.name = this.route.snapshot.params['name'].toUpperCase();
  }
}