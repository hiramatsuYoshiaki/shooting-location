import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Spot } from '../app.spot';

@Component({
  selector: 'app-category-map',
  templateUrl: './category-map.component.html',
  styleUrls: ['./category-map.component.scss']
})
export class CategoryMapComponent implements OnInit {
   @Input() selectCategory: string;
   @Input() items: FirebaseListObservable<any[]>;

  constructor() { }

  ngOnInit() {
  }
  
   zoom: number = 5;
  //center point
  lat: number  = 37.2653099;
  lng: number = 136.8457031;
}
