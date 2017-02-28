import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { DataService } from '../data.service';
//import { UidService } from '../uid.service';
import { Spot } from '../app.spot';
import { Category } from '../category';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [DataService],
})
export class UserComponent implements OnInit {
  selectUser:Category = null;
  users: FirebaseListObservable<any[]>; 
  items: FirebaseListObservable<any[]>;
  image: string [] =[];
  selectIndex: number;
  selectId:string = "";
  spot: Spot;
  selectSpot: Spot;

  constructor(private DataService: DataService, public af: AngularFire) { 
  //  console.log('constroctor onSelectUser User id ' + this.selectId)
    this.users = this.DataService.getFirebaseCategorys();
    //this.items = this.UidService.filterUserBy(this.selectId);
   // this.image = this.UidService.getStrageUser();

  }
  ngOnInit() {
    
   }
   
  onSelectUser(user:Category, idx: number ): void {
    this.selectUser = user;
    this.selectIndex = idx;
    // console.log('onSelectUser User id ' + this.selectUser.uid)
    // console.log('onSelectUser User id ' + this.selectUser.photoName)
    // this.items = this.UidService.filterUserBy(this.selectUser.uid);
    // this.image = this.UidService.getStrageUser();
    
    this.items = this.af.database.list('/photos', {
      query: {
        orderByChild: 'uid',
        equalTo: user.uid
      }
    });
    this.items.subscribe(items => items.forEach(
        (item , index )  => {
          firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
      //console.log('title '+ item.title +' lat '+ item.lat[index] +' lng '+ item.lng[index]);
        } 
     ));
    
   
  };
  onSelect(spot:Spot, idx: number ): void {
    this.selectSpot = spot;
    this.selectSpot.id = idx;
  }
}
