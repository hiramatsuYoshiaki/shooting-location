import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

 
 constructor() {
    

  }


 login(): void {
   
    this.isLoggedIn = true;
    console.log('authService logoin: '+this.isLoggedIn);

  }
  logout(): void {
   
    this.isLoggedIn = false;
    console.log('authService logoff: '+this.isLoggedIn);
  }
}
