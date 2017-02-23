import { Component, OnInit, Input } from '@angular/core';

import { Spot } from '../app.spot';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {
  @Input()
  selectSpot: Spot;
  zoom: number = 12;

  @Input()
  image: string [] = [];

  constructor() { }

  ngOnInit() {
  }

}
