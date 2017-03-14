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


@Component({
    selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;
  constructor(public authService: AuthService, public router: Router) {
   

  }
  setMessage() {
    // this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    this.message = 'Ｇｏｏｇｌｅアカウントで ' + (this.authService.isLoggedIn ? 'ログアウト' : 'ログイン')　+ 'します。';
  }
 
  login() {
      this.message = 'ログインしています ...';
      this.authService.login();
      this.setMessage();

      if (this.authService.isLoggedIn) {
       let redirect = this.authService.redirectUrl ="admin";
        this.router.navigate([redirect]);
      }
   
  }
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
