import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../cat.model';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {
  @Input() cat: Cat
  catImg: string

  constructor(private catService: CatService) { }

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.cat) {
      this.catImg = this.cat.url
    }
  }

}
