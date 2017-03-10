// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth-service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;
  constructor(public af: AngularFire,public authService: AuthService, public router: Router) {
    this.setMessage();
    firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
      
         console.log('onAuthStateChanged logoin');
         console.log('onAuthStateChanged login '+ user.displayName);
          console.log('onAuthStateChanged login '+ user.email);
          console.log('onAuthStateChanged login '+ user.photoURL);
          console.log('onAuthStateChanged login '+ user.uid);
      } else {
         console.log('onAuthStateChanged logoff ');
      }
    });

  }
  setMessage() {
    // this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    this.message = 'Ｇｏｏｇｌｅアカウントで ' + (this.authService.isLoggedIn ? 'ログアウト' : 'ログイン')　+ 'してください。';
  }
 
  login() {
      this.message = 'ログインしています ...';
      this.af.auth.login();
      this.authService.login();
      this.setMessage();

      if (this.authService.isLoggedIn) {
       let redirect = this.authService.redirectUrl ="admin";
        this.router.navigate([redirect]);
      }
   
  }
  logout() {
    this.af.auth.logout();
    this.authService.logout();
    this.setMessage();
  }
}
