import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { Spot } from '../app.spot';
import { Category } from '../category';


import { UidService } from '../uid.service';
import { DataService } from '../data.service';


//  cate1:string;
//   cate2:string;
//   cate3:string;
//   cate4:string;
//   cate5:string;
//   cate6:string;
//   cate7:string;
//   displayName:string;
//   email:string;
//   intro:string;
//   photoName:string;
//   uid:string;

@Component({
  selector: 'app-user-photo-list',
  templateUrl: './user-photo-list.component.html',
  styleUrls: ['./user-photo-list.component.scss']
 
  // providers: [UidService],
  // providers: [UidService,DataService],
})
export class UserPhotoListComponent implements OnInit {
   @Input() selectUser: Category;
   @Input() user: FirebaseListObservable<any[]>
   @Input() items: FirebaseListObservable<any[]>;
   @Input() image: string [] ;
  //  user: FirebaseListObservable<any[]>
  //  items: FirebaseListObservable<any[]>;
  //  image: string [] ;
   spot: Spot;
   selectSpot: Spot;
   //itemsUse : FirebaseListObservable<any[]>;

 constructor( ) { }
  // constructor( private UidService: UidService, private DataService: DataService) { 

  //      console.log("constructer selectuser uid : "+this.selectUser.uid);

  //     this.items = this.UidService.filterUserBy(this.selectUser.uid);
  //     this.image = this.UidService.getStrageUser();

  // }
 

  ngOnInit() {
    // console.log("ngOnInit items uid : " );
    
  }
  ngOnChenge(){
    // this.itemsUse =  this.items;
    // console.log("ngOnChenge items uid: ");
   

  }
//  items: FirebaseListObservable<any[]> = this.DataService.getFirebase();
//  image: string [] = this.DataService.getStrage();
    // if( selectUser.uid){
    //    console.log(this.selectUser.uid);
     //  this.items = this.UidService.filterUserBy(this.selectUser.uid);
      // this.image = this.UidService.getStrageUser();
    //  }
  //   if( ! this.selectUser ){
  //    console.log('selectUser null');
    
  //   }


  onSelect(spot:Spot, idx: number ): void {
    this.selectSpot = spot;
    this.selectSpot.id = idx;
  }

 
}
