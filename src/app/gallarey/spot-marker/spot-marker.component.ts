import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { Spot } from '../../app.spot';


@Component({
  selector: 'app-spot-marker',
  templateUrl: './spot-marker.component.html',
  styleUrls: ['./spot-marker.component.scss']
})
export class SpotMarkerComponent implements OnInit {
   items: FirebaseListObservable<any[]>;
   private sub: any;
   user:string;
   img:string;
   selectSpot: Spot;
   image: string ;
   zoom: number = 12;

  constructor( public af: AngularFire,
               private route: ActivatedRoute,
               private router: Router,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.user = params['id']; 
        this.img = params['img']; 
      });
       this.sub = this.route.params.subscribe(params => {
   
          this.items = this.af.database.list('/photos', {
              query: {
                orderByChild: 'displayName',
                equalTo: params['id']
              }
          });
         
          this.items.subscribe(items => items.forEach(
              (item , index )  => {
              //   firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
              if(item.img === params['img'] ){
                  this.selectSpot = item;
                  firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image = url)
              }
           } 
              
          ));
           
      });
      
  }

}
