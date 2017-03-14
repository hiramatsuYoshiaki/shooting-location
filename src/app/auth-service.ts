import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

 
 constructor(public af: AngularFire) {
    

  }


 login(): void {
    this.af.auth.login();
    // firebase.auth().onAuthStateChanged((user) => {
      // if (!user) {
        // サインインしていない状態
        // this.isLoggedIn = false;
        // console.log('authService logoff: '+this.isLoggedIn);
      // } else {
        // サインイン済み
        this.isLoggedIn = true;
        console.log('authService logoin: '+this.isLoggedIn);

      // }
    // });
  }

  logout(): void {
    this.af.auth.logout();
    // firebase.auth().onAuthStateChanged((user) => {
      // if (!user) {
        // サインインしていない状態
        this.isLoggedIn = false;
        console.log('authService logoff: '+this.isLoggedIn);
      // } else {
        // サインイン済み
        // this.isLoggedIn = true;
        // console.log('authService logoin: '+this.isLoggedIn);
      // }
    // });
  }

}
