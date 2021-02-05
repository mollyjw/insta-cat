import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Favorite } from '../models-and-mocks/favorite.model';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.css'],

  encapsulation: ViewEncapsulation.None,

})
export class FavoriteCardComponent implements OnInit {

  @Input() favorite: Favorite
  favoriteImg: string
  favorites: Favorite[] = []
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[2]);

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges() {
    console.log('hello from favorites')
    if (this.favorite) {
      this.favoriteImg = this.favorite.image_id
    }
  }

}
