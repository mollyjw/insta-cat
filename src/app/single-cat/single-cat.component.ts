import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cat } from '../cat.model';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-single-cat',
  templateUrl: './single-cat.component.html',
  styleUrls: ['./single-cat.component.css']
})
export class SingleCatComponent implements OnInit {
  cat: Cat
  catImg: string
  private sub = new Subscription()
  constructor(
    private catService: CatService,
    private route: ActivatedRoute
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
          this.cat = new Cat(data.cat) //weird line that has much power
          this.catImg = this.cat.url
        } error => {
          if (error) {
            console.log(error)
          }
        }
      })
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
