import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
 
  @Input() image: string [] = [] ;
  @Input() items: FirebaseListObservable<any[]>;
  zoom: number = 5;
  
  //center point
  lat: number  = 37.2653099;
  lng: number = 136.8457031;
  
  //Marker
  //岡山リサーチパーク
  //lat1: number  = 34.7288881940042;
 // lng1: number = 133.87920278206107;
   //笹ヶ瀬川
 // lat2: number  = 34.5863654104464;
  //lng2: number = 133.9181318272645;
   //水田
 // lat3: number  = 34.58442218389951;
 // lng3: number = 133.9123167981202;
 //児島湾締切堤防
 // lat4: number  = 34.58338342236497;
 // lng4: number = 133.95633399381975;
 //鷲羽山水島展望台
 // lat5: number  = 34.510308980960936;
 // lng5: number = 133.7815065373516;

  //gs://mychat-ed85a.appspot.com/twilite/img9056.jpg
  
  
  constructor() { }

  ngOnInit() {
  }

}
