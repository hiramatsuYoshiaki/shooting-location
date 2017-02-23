import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { Category } from '../category';
import { Spot } from '../app.spot';


@Component({
  selector: 'app-user-photo-list2',
  templateUrl: './user-photo-list2.component.html',
  styleUrls: ['./user-photo-list2.component.scss'],
 
})
export class UserPhotoList2Component implements OnInit {

   @Input() selectUser: Category;
   @Input() user: FirebaseListObservable<any[]>
   @Input() items: FirebaseListObservable<any[]>;
   @Input() image: string [] ;
   spot: Spot;
   selectSpot: Spot;
  

  constructor( ) { }

  ngOnInit() {
   
    
  }
  ngOnChange(){
  
  }
  // items: FirebaseListObservable<any[]> = this.DataService.getFirebase();
  // image: string [] = this.DataService.getStrage();
  
  // items = this.UidService.filterUserBy(this.selectUser.uid);
  // image = this.UidService.getStrageUser();

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
