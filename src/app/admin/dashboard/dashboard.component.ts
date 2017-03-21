import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

import { Spot } from '../../app.spot';
import { Category } from '../../category';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  spot: Spot;
  selectSpot: Spot;
 
  items: FirebaseListObservable<any[]>;
  category: FirebaseListObservable<any[]>;
  image: string [] = [];
  uid: string;
  displayName: string;
  email: string;
  categorySW:boolean = true;
  updateSW:boolean = false;

  categoryName: string;
  categoryIntro: string;
  categoryKey: string;
  onClickIdx: number;

  cnt: number = 0;
  cat_twilite: number = 0;
   

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
        if(auth) {
           this.uid =  auth.uid;
        } else {
        }
    });

    this.category = af.database.list('/category');
    this.category.subscribe(category => category.forEach(
    (categoryItem , index )  => {
      if(categoryItem.uid === this.uid){
        this.displayName = categoryItem.displayName;
        this.categoryName = categoryItem.photoName;
        this.categoryIntro = categoryItem.intro;
        this.categoryKey = categoryItem.$key;
        this.categorySW = false;
      }
    }       
    ));
    this.items = this.af.database.list('/photos', {
      query: {
        orderByChild: 'uid',
        equalTo: this.uid
      }
    });

    this.items.subscribe(items => items.forEach(
    (item , index )  => {
      if(item.category === "Twilite"){
        this.cat_twilite = this.cat_twilite + 1
      }
      this.cnt = this.cnt +1 
      console.log('twilite ' + this.cat_twilite);
      console.log('all ' +  this.cnt );

    }

    ));
    this.items.subscribe(items => items.forEach(
    (item , index )  => {
      firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
    }       
    ));
 }

  ngOnInit() { }


  

}
