import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.css']
})
export class AddFavoriteComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }

}
