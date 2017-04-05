import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location }               from '@angular/common';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { Spot } from '../../app.spot';

@Component({
  selector: 'app-home-spot',
  templateUrl: './home-spot.component.html',
  styleUrls: ['./home-spot.component.scss']
})
export class HomeSpotComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  image: string ;
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

  constructor(public af: AngularFire,
              private route: ActivatedRoute, 
              private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.imgURL = params['imgURL']; 
      //  console.log('getpram'+ params['imgURL']);
       this.items = this.af.database.list('/photos', {
              query: {
                orderByChild: 'img',
                equalTo:  params['imgURL']
              }
          });
        this.items.subscribe(items => items.forEach(
            (item , index )  => {
            //   firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
            if( item.img === params['imgURL']){
                this.selectSpot = item;
                // this.selectSpot.id = this.idx;
                //  console.log( "selectSpot title"+this.selectSpot.title);
                firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image = url)
            }
          } 
            
        ));
    });
  }
  goBack(): void {
    this.location.back();
  }

}
