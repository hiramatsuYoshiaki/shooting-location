import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
//import { DataService } from '../../data.service';
import { Spot } from '../../app.spot';
//import { Category } from '../../category';


@Component({
  selector: 'app-category-photos',
  templateUrl: './category-photos.component.html',
  styleUrls: ['./category-photos.component.scss']
})
export class CategoryPhotosComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  image: string [] =[];
  user:string;
  category:string;
  private sub: any;
  itemsCategory:Spot[]=[];
  selectSpot: Spot;
  zoom: number = 5;
  //center point
  lat: number  = 37.2653099;
  lng: number = 136.8457031;
  constructor( public af: AngularFire,
               private route: ActivatedRoute,
               private router: Router,
               private location: Location) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
          this.user =   params['id']; 
          this.category =   params['category']; 
          this.items = this.af.database.list('/photos', {
              query: {
                orderByChild: 'displayName',
                equalTo: params['id']
              }
          });
          this.items.subscribe(items => items.forEach(
              (item , index )  => {
                  if(item.category === params['category']){
                    item.id = index;
                    this.itemsCategory.push(item);
                    firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
                }
               } 
           ));
      });     
  }
   onSelect(spot:Spot, idx: number ) {
    this.selectSpot = spot;
    this.selectSpot.id = idx;
    this.router.navigate(['gallarey/users/photos/spot',this.selectSpot.displayName,this.selectSpot.id]);
 }
  goBack(): void {
    this.location.back();
  }
}
