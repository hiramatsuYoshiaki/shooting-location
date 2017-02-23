import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import { Category } from './category';

@Injectable()
export class UidService {

  itemsUser: FirebaseListObservable<any[]>;
  userSubject: Subject<any>;
  imageUser: string [] = [];
  uid: string;

  constructor(public af: AngularFire) { 
    console.log("uidService constructor pass" );
    //firebase fillter カテゴリーを抽出
      this.userSubject = new Subject();
        this.itemsUser = af.database.list('/photos', {
          query: {
            orderByChild: 'uid',
            //equalTo: this.userSubject
           equalTo: this.uid
          }
        });
      //firebase fillter 抽出したカテゴリーの画像を取得
      this.itemsUser.subscribe(items => items.forEach(
        (item , index )  => {
          firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.imageUser[index] = url)
      //console.log('title '+ item.title +' lat '+ item.lat[index] +' lng '+ item.lng[index]);
        } 
      ));
  }

   filterUserBy(selectUser: string):FirebaseListObservable<any[]> {
      console.log('UidService select User id ' + selectUser)
        //this.userSubject.next(selectUser); 
        this.uid = selectUser;
        return this.itemsUser
      }
  getStrageUser():string []{
        return this.imageUser;
      };
}
