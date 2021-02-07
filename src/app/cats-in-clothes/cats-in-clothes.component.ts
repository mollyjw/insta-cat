import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cat } from '../models-and-mocks/cat.model';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cats-in-clothes',
  templateUrl: './cats-in-clothes.component.html',
  styleUrls: ['./cats-in-clothes.component.css']
})
export class CatsInClothesComponent implements OnInit {

  cats: Cat[] = []
  private sub = new Subscription()
  constructor(
    private router: Router,
    private catService: CatService,
  ) { }

  ngOnInit(): void {
    this.getClothedCats()
  }

  getClothedCats() {
    this.sub.add(
      this.catService.getCatsInClothes().subscribe(data => {
        if (data) {
          if (data.length) {
            this.cats = data.map(x => new Cat(x))
          } else {
            this.cats = []
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
