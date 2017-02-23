import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { DataService } from '../data.service';
import { Spot } from '../app.spot';


@Component({
  selector: 'app-photo-location',
  templateUrl: './photo-location.component.html',
  styleUrls: ['./photo-location.component.scss'],
  providers: [DataService],

})
export class PhotoLocationComponent implements OnInit , OnDestroy{
  imgURL:string;
  private sub: any;

  spot: Spot;
  selectSpot: Spot;

  // google maps zoom level
  zoom: number = 12;
  // initial center position for the map
  //center point
  lat: number  = 34.6661326894375;
  lng: number = 133.91807389155386;

  constructor(private route: ActivatedRoute, private DataService: DataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      //  this.imgURL = +params['imgURL']; // (+) converts string 'id' to a number
       this.imgURL = params['imgURL']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }

  items: FirebaseListObservable<any[]> = this.DataService.getFirebase();
  image: string [] = this.DataService.getStrage();


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}
