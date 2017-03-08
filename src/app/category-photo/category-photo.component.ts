import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Location }               from '@angular/common';
import { Spot } from '../app.spot';



@Component({
  selector: 'app-category-photo',
  templateUrl: './category-photo.component.html',
  styleUrls: ['./category-photo.component.scss']
})
export class CategoryPhotoComponent implements OnInit {
 @Input()  selectCategory:string;
 @Input()  items: FirebaseListObservable<any[]>;
 @Input()  image: string [] = [];
 spot: Spot;
 selectSpot: Spot;
  constructor(private route: ActivatedRoute,
               private router: Router,
               private location: Location) { }

  ngOnInit() {
  }
  onSelect(spot:Spot, idx: number ) {
    this.selectSpot = spot;
    this.selectSpot.id = idx;
    this.router.navigate(['gallarey/users/photos/spot',this.selectSpot.displayName,this.selectSpot.id]);
 }
 
 
}
