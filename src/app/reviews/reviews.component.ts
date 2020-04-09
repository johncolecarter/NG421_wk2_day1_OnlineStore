import { Component, OnInit, Input } from '@angular/core';
import { IProducts } from '../models/iproducts';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() rating: number;
  stars: number[] = [];
  noStars: number[] = [];
  readonly MAXrate: number = 5;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.MAXrate; i++) {
      if (i < this.rating) {
        this.stars.push(i);
      } else {
        this.noStars.push(i);
      }
    }
  }
}
