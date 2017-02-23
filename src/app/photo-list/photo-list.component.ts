import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

import { Spot } from '../app.spot';
import { Locations } from '../locations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  providers: [DataService],
})
export class PhotoListComponent implements OnInit {
//   @Input()
//   items: FirebaseListObservable<any[]>;
//   @Input()
//  image: string [] = [];

   spot: Spot;
   selectSpot: Spot;
  
  constructor(
     private DataService: DataService
  ) { }

  ngOnInit() { }

  items: FirebaseListObservable<any[]> = this.DataService.getFirebase();
  image: string [] = this.DataService.getStrage();
  

  // userLogin: boolean = this.DataService.getLogin();
  // displayName: string = this.DataService.getDisplayName();
  
  
   

  onSelect(spot:Spot, idx: number ): void {
  
    this.selectSpot = spot;
    this.selectSpot.id = idx;
  }

  // google maps zoom level
  zoom: number = 10;
  // initial center position for the map
  //center point
  lat: number  = 34.6661326894375;
  lng: number = 133.91807389155386;







}
