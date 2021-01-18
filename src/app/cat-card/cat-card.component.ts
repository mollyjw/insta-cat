import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat.model';
import { CatService } from '../services/cat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {
  cats: Cat[] = []
  private sub = new Subscription()

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.retrieveAllCats()
  }

  retrieveAllCats() {
    this.sub.add(
      this.catService.getAllCats().subscribe(data => {
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
