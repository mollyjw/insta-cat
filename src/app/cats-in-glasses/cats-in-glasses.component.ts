import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cat } from '../models-and-mocks/cat.model';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cats-in-glasses',
  templateUrl: './cats-in-glasses.component.html',
  styleUrls: ['./cats-in-glasses.component.css']
})
export class CatsInGlassesComponent implements OnInit {

  cats: Cat[] = []
  private sub = new Subscription()
  constructor(
    private router: Router,
    private catService: CatService,
  ) { }

  ngOnInit(): void {
    this.getGlassesCats()
  }

  getGlassesCats() {
    this.sub.add(
      this.catService.getCatsInGlasses().subscribe(data => {
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
