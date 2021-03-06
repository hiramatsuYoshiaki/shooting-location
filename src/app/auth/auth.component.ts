import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

import { Spot } from '../app.spot';
import { Category } from '../category';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
 spot: Spot;
 selectSpot: Spot;
 image: string [] = [];
 items: FirebaseListObservable<any[]>;
 category: FirebaseListObservable<any[]>;
 uid:string;
 user = {};
//  topCategory: FirebaseListObservable<any[]>;
 


  constructor(public af: AngularFire) { 

    //  ログインユーザーの取得
     firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
        // User is signed in.
        //  console.log('onAuthStateChanged logoin');
        //  this.uid = user.uid;
          // this.uid = user.uid.toString();
          // this.user = user;

        //  console.log('AuthComponent  user.uid: '+ user.uid);
        //  console.log('AuthComponent  this.uid: '+this.uid);
        //  console.log('AuthComponent  user: '+this.user);
        //  console.log('AuthComponent  user: '+this.user.uid);
        //ユーザーのプロフィールを取得する
          // console.log('onAuthStateChanged login '+ user.displayName);
          // console.log('onAuthStateChanged login '+ user.email);
          // console.log('onAuthStateChanged login '+ user.photoURL);
          // console.log('onAuthStateChanged login '+ user.uid);
        
          //ユーザーのプロバイダ別のプロフィール情報を取得する
          // user.providerData.forEach(function (profile) {
          //this.providerId =profile.providerId;
          // console.log("Sign-in provider: "+profile.providerId);
          // console.log("  Provider-specific UID: "+profile.uid);
          // console.log("  Name: "+profile.displayName);
          // console.log("  Email: "+profile.email);
          // console.log("  Photo URL: "+profile.photoURL);
          // this.userDisplayName = profile.providerId;
          // this.userEmail = profile.email;
          // this.userPhotoURL = profile.photoURL;
          // this.userUid = profile.uid;
          // this.userPrividerId = profile.providerId;
          // this.uerLogin = true;
          
           // firebaseからのデータ取得


      } else {
        //  console.log('onAuthStateChanged logoff ');
        // No user is signed in.
          // this.uerLogin =false;
          this.uid = null;
      }
    });

   
    // this.items = af.database.list('/photos');
    // this.items = af.database.list('/photos', {
    //   query: {
    //     orderByChild: 'uid',
    //      equalTo: this.uid
       // equalTo: 'z6iRzzUk2oc44IYeR8WlXB7Pxhf2'
    //   }
    // });

    // this.category = af.database.list('/category');
    // this.items.subscribe(items => items.forEach(
    // (item , index )  => {
    //   firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
    // }       
    // ));

    // this.items.subscribe(items => items.forEach(
    // (item , index )  => {
    //   var path = firebase.storage().ref().child(item.img).fullPath;
    //   var name = firebase.storage().ref().child(item.img).name;
    //   var imagesRef = firebase.storage().ref().child(item.img).parent;
     
    // }       
    // ));

  }//constructor

  ngOnInit() {
  }
  onSelect(spot:Spot): void {
    // this.selectSpot = spot
    this.selectSpot = spot;
  }
  login() {
    this.af.auth.login();
  }
  logout() {
     this.af.auth.logout();
  }
   
}
