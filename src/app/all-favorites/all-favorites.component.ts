import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Favorite } from '../models-and-mocks/favorite.model';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-all-favorites',
  templateUrl: './all-favorites.component.html',
  styleUrls: ['./all-favorites.component.css']
})
export class AllFavoritesComponent implements OnInit {
  favorites: Favorite[] = []
  private sub = new Subscription()
  constructor(
    private router: Router,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    this.retrieveAllFavorites()
    }

    retrieveAllFavorites() {
      this.sub.add(
        this.favoriteService.getAllFavorites().subscribe(data => {
          if (data) {
            if (data.length) {
              this.favorites = data.map(x => new Favorite(x))
            } else {
              this.favorites = []
            }
          }
        }, error => {
          if (error) {
            console.log(error)
          }
        })
      )
    }
}
