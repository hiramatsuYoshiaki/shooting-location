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
    //this.af.auth.login();
    // this.af.auth.subscribe(auth => {
    //     if(auth) {
         
           this.isLoggedIn = true;
    //       console.log('login authService isLoggedIn: '+this.isLoggedIn);
            
    //     } else {
         
    //       this.isLoggedIn = false;
    //       console.log('login authService isLoggedIn: '+this.isLoggedIn); 
    //     }
    // });

    // this.af.onAuthStateChanged((user) => {
    //   if (!user) {
    //     //サインインしていない状態
    //     this.isLoggedIn = false;
    //     console.log('login authService isLoggedIn: '+this.isLoggedIn);
    //   } else {
    //    // サインイン済み
    //     this.isLoggedIn = true;
    //     console.log('login authService isLoggedIn: '+this.isLoggedIn);

    //   }
    // });
  }

  logout(): void {
    //this.af.auth.logout();
    // this.af.auth.subscribe(auth => {
    //     if(auth) {
         
    //       this.isLoggedIn = true;
    //       console.log('login authService isLoggedIn: '+this.isLoggedIn);
            
    //     } else {
          
           this.isLoggedIn = false;
    //       console.log('login authService isLoggedIn: '+this.isLoggedIn); 
    //     }
    // });
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (!user) {
    //    // サインインしていない状態
    //     this.isLoggedIn = false;
    //     console.log('logout authService isLoggedIn: '+this.isLoggedIn);
    //   } else {
    //     //サインイン済み
    //     this.isLoggedIn = true;
    //     console.log('logout authService isLoggedIn: '+this.isLoggedIn);
    //   }
    // });
  }

}
