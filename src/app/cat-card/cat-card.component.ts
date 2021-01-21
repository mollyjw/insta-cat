import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {
  @Input() cat: Cat
  catImg: string

  constructor(private router: Router) { }

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.cat) {
      this.catImg = this.cat.url
    }
  }

  goToCatView(id: string) {
    this.router.navigate([`/cats/${id}`])
  }

}
