import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() image: string [] = [] ;
  @Input() items: FirebaseListObservable<any[]>;
  zoom: number = 5;
  //center point
  lat: number  = 37.2653099;
  lng: number = 136.8457031;

  constructor() { }

  ngOnInit() {
  }

}
