import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';

import { Spot } from './app.spot';

@Injectable()
export class DataService {

  //spot: Spot;
  //selectSpot: Spot;
  image: string [] = [];
  

  items: FirebaseListObservable<any[]>;
  categorys: FirebaseListObservable<any[]>;
  topCategorys: FirebaseListObservable<any[]>;
  

  constructor(public af: AngularFire) {

      //firebaseからのデータ取得
      this.items = af.database.list('/photos');
      this.categorys = af.database.list('/category');
      this.topCategorys = af.database.list('/top-category');
      //firebase strageからの画像データ取得
      this.items.subscribe(items => items.forEach(
        (item , index )  => {
          firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
      //console.log('title '+ item.title +' lat '+ item.lat[index] +' lng '+ item.lng[index]);
        } 
      ));
  
  }

  getFirebase():FirebaseListObservable<any[]>{
    return this.items;
  };
  getFirebaseCategorys():FirebaseListObservable<any[]>{
    return this.categorys;
  };
  getFirebaseTopCategorys():FirebaseListObservable<any[]>{
    return this.topCategorys;
  };
  getStrage():string []{
    return this.image;
  };

  
  
  
}
