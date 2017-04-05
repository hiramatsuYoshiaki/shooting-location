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
import { Router, NavigationExtras }      from '@angular/router';
import { AuthService } from '../auth-service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';


@Component({
    selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;
  // isLoggedIn: boolean = false;

  constructor(public af: AngularFire, public authService: AuthService, public router: Router) {
    this.setMessage(); 
   

  }
  setMessage() {
    // this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    this.message = 'Ｇｏｏｇｌｅアカウントで ' 
    + (this.authService.isLoggedIn ? 'ログアウト' : 'ログイン')　+ '';
  }
 
  login() {
    // console.log('push logoin');
      this.message = 'ログインしています ...';
       this.setMessage();
      //this.authService.login();
      this.af.auth.login();
      this.af.auth.subscribe(auth => {
          if(auth) {
          
            // this.isLoggedIn = true;
            this.authService.login();
            // console.log('aaa auth true  authService.isLoggedIn: '+this.authService.isLoggedIn);
              
          } else {
          
            // this.isLoggedIn = false;
             this.authService.logout();
            // console.log('bbb auth false  authService.isLoggedIn: '+this.authService.isLoggedIn); 
          }
      });
     

      if (this.authService.isLoggedIn) {
        // console.log('login to Route  goto admin');
        let redirect = this.authService.redirectUrl ="admin";
        this.router.navigate([redirect]);
     
      // Set our navigation extras object
        // that passes on our global query params and fragment
        // let navigationExtras: NavigationExtras = {
        //   preserveQueryParams: true,
        //   preserveFragment: true
        // };


        // Redirect the user
      //  this.router.navigate([redirect], navigationExtras);
      }else{
        //  console.log('Cancele to Route  goto login');
         let redirect = this.authService.redirectUrl ="login";
         this.router.navigate([redirect]);
      }
  }

  logout() {
    //  console.log('push logout');
    //this.authService.logout();
    this.af.auth.logout();
     this.af.auth.subscribe(auth => {
          if(auth) {
          
            // this.isLoggedIn = true;
            this.authService.login();
            // console.log('auth true  authService.isLoggedIn: '+this.authService.isLoggedIn);
              
          } else {
          
            // this.isLoggedIn = false;
             this.authService.logout();
            // console.log('auth false  authService.isLoggedIn: '+this.authService.isLoggedIn); 
          }
      });
     
    this.setMessage();
    if (this.authService.isLoggedIn) {

        // console.log('login to Route  goto admin');
       let redirect = this.authService.redirectUrl ="login";
       this.router.navigate([redirect]);
     
      }else{
        //  console.log('Cancele to Route  goto login');
         let redirect = this.authService.redirectUrl ="login";
         this.router.navigate([redirect]);

      }
  }

}
