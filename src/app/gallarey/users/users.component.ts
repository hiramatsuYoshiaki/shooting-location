// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.scss']
// })
// export class UsersComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { DataService } from '../../data.service';
import { Spot } from '../../app.spot';
import { Category } from '../../category';

@Component({
 selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [DataService],
})
export class UsersComponent implements OnInit {
  selectUser:Category = null;
  users: FirebaseListObservable<any[]>; 
  items: FirebaseListObservable<any[]>;
  image: string [] =[];
  selectIndex: number;
  selectId:string = "";
  spot: Spot;
  selectSpot: Spot;

  constructor(private DataService: DataService,
               public af: AngularFire,
               private route: ActivatedRoute,
               private router: Router) { 
  
    this.users = this.DataService.getFirebaseCategorys();
  }
  ngOnInit() {
   }
   
  onSelectUser(user:Category, idx: number ): void {
    this.selectUser = user;
    this.selectIndex = idx;
    this.router.navigate(['gallarey/users/photos',user.displayName]);
  };
  
}
