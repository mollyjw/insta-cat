import { Component, OnInit } from '@angular/core';
import { faSink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faSink = faSink;
  constructor() { }

  ngOnInit(): void {
  }

}
