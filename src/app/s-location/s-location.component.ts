import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Component, OnInit, Input } from '@angular/core';

import { Spot } from '../app.spot';

// interface marker {
// 	lat: number;
// 	lng: number;
// 	label: string;
// 	draggable: boolean;
// }

@Component({
  selector: 'app-s-location',
  templateUrl: './s-location.component.html',
  styleUrls: ['./s-location.component.scss']
})
export class SLocationComponent implements OnInit {
  @Input()
  selectSpot: Spot;

  @Input()
  image: string [] = [];
  // spot: Spot;
 
 

  // markers: marker[] = [
	//   {
	// 	  lat: 34.6661326894375,
	// 	  lng: 133.91807389155386,
	// 	  label: 'R',
	// 	  draggable: true
	//   },
	//   {
	// 	  lat: 34.5863654104464,
	// 	  lng: 133.87920278206107,
	// 	  label: 'S',
	// 	  draggable: false
	//   },
  //   {
	// 	  lat: 34.58442218389951,
	// 	  lng: 133.9123167981202,
	// 	  label: '7',
	// 	  draggable: false
	//   },
	//   {
	// 	  lat: 34.58338342236497,
	// 	  lng: 133.95633399381975,
	// 	  label: 'K',
	// 	  draggable: true
	//   },
  //    {
	// 	  lat: 34.51030898096093,
	// 	  lng: 133.7815065373516,
	// 	  label: 'W',
	// 	  draggable: true
	//   }
  // ];

  // mks: marker[];

  // google maps zoom level
  zoom: number = 9;
  
  // initial center position for the map
  //center point
  lat: number  = 34.6661326894375;
  lng: number = 133.91807389155386;
  
  //Marker
  //岡山リサーチパーク
  lat1: number  = 34.7288881940042;
  lng1: number = 133.87920278206107;
  label1:string = 'R';
   //笹ヶ瀬川
  lat2: number  = 34.5863654104464;
  lng2: number = 133.9181318272645;
  label2:string = 'S';
   //水田
  lat3: number  = 34.58442218389951;
  lng3: number = 133.9123167981202;
  label3:string = '7';
 //児島湾締切堤防
  lat4: number  = 34.58338342236497;
  lng4: number = 133.95633399381975;
  label4:string  = 'K';
 //鷲羽山水島展望台
  lat5: number  = 34.510308980960936;
  lng5: number = 133.7815065373516;
  label5:string  = 'W';

  constructor() {

   }

  ngOnInit() {
   
   
  }
     

}
