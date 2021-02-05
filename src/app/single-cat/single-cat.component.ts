import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TooltipPosition } from '@angular/material/tooltip';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cat } from '../models-and-mocks/cat.model';
import { CatService } from '../services/cat.service';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-single-cat',
  templateUrl: './single-cat.component.html',
  styleUrls: ['./single-cat.component.css'],

  encapsulation: ViewEncapsulation.None,

})
export class SingleCatComponent implements OnInit {
  cat: Cat
  catImg: string
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[2]);

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  private sub = new Subscription()
  constructor(
    private catService: CatService,
    private favoriteService: FavoriteService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(cat => {
      if (cat && cat.id) {
        this.getThatCat(cat.id)
      }
    })
  }

  getThatCat(id: string) {
    const params = {id: id}
    this.sub.add(
      this.catService.getCatbyId(params).subscribe(data => {
        if (data) {
          console.log(data)
          this.cat = new Cat(data) //weird line that has much power
          this.catImg = this.cat.url
        } error => {
          if (error) {
            console.log(error)
          }
        }
      })
    )
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

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
