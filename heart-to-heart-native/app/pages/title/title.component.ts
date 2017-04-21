import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'ns-title',
  templateUrl: './pages/title/title.html',
  styleUrls: ['./pages/title/title-common.css', './pages/title/title.css']
})

export class TitleComponent {
  constructor(private router: Router){}

  goto(page: string) {
    this.router.navigate([page]);
  }
}