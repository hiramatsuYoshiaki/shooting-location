import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

// import { Spot } from './app.spot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 WebTitle ='SHOOTING LOCATIONS';
 WebSubTitle ='TOURdeHDR+';
//  spot: Spot;
//  selectSpot: Spot;
//  image: string [] = [];

//  items: FirebaseListObservable<any[]>;

// uerDisplayName: string;
// uerEmail: string;
// userPhotoURL: string;
// userUid: string;
// userProviderId: string;
// uerLogin: boolean = false;

constructor(
  public af: AngularFire
  ) {
    //  ログインユーザーの取得
     firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
        // User is signed in.
        console.log('onAuthStateChanged logoin');
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

      } else {
         console.log('onAuthStateChanged logoff ');
        // No user is signed in.
          // this.uerLogin =false;
      }

    });

  // firebaseからのデータ取得
  // this.items = af.database.list('/photos');
  // firebase strageからの画像データ取得
    // this.items.subscribe(items => items.forEach(
    // (item , index )  => {
    //   firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[item.id] = url)
    // }       
    // ));
  //  this.items.subscribe(items => items.forEach(
  //      (item , index )  => { console.log(index),console.log(item) } ));

}//constructor

//  login() {
//     this.af.auth.login();
//   }
//   logout() {
//      this.af.auth.logout();
//   }

}
