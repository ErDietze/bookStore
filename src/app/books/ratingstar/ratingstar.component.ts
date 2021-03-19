import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'br-ratingstar',
  templateUrl: './ratingstar.component.html',
  styleUrls: ['./ratingstar.component.scss']
})
export class RatingstarComponent implements OnInit {

  @Input() stars: number;
  constructor() { }

  ngOnInit(): void {
  }
  getRating(): any {
    return new Array(this.stars);
  }

}
