import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Cat } from '../models-and-mocks/cat.model';
import { Favorite } from '../models-and-mocks/favorite.model';
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

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  favorites: Favorite[] = []
  private sub = new Subscription()

  constructor(
    private router: Router,
    private favoriteService: FavoriteService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.cat) {
      this.catImg = this.cat.url
    }
  }

  goToCatView(id: string) {
    this.router.navigate([`/cats/${id}`])
  }

  openSnackBar() {
    this._snackBar.open('Added to your favorites!', 'Close', {
      duration: 2500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  favorite(id: string) {
    console.log(id)
    const params = {
      imageId: id
    }
    this.sub.add(
      this.favoriteService.addToFavorites(params).subscribe(
        data => {
          if (data) {    }
      }, error => {
        if (error) {
          console.log(error)
        }
      })

    )
    this.openSnackBar
    console.log("favorite added")
  }
}
