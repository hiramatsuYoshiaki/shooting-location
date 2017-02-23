import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-category-photo',
  templateUrl: './category-photo.component.html',
  styleUrls: ['./category-photo.component.scss']
})
export class CategoryPhotoComponent implements OnInit {
 @Input()  selectCategory:string;
 @Input()  items: FirebaseListObservable<any[]>;
 @Input()  image: string [] = [];
  constructor() { }

  ngOnInit() {
  }

}
