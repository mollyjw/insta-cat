import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Cat } from '../models-and-mocks/cat.model';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css'],

  encapsulation: ViewEncapsulation.None,

})
export class CatCardComponent implements OnInit {
  @Input() cat: Cat
  catImg: string
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[2]);
  favoriteService: FavoriteService

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

  favorite(id: string) {
    this.favoriteService.addToFavorites(id)
    console.log("favorite added")
  }
}
