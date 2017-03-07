import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { DataService } from '../../data.service';
//import { UidService } from '../uid.service';
import { Spot } from '../../app.spot';
import { Category } from '../../category';

@Component({
   selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  providers: [DataService],
})
export class PhotosComponent implements OnInit {
  selectUser:Category = null;
  users: FirebaseListObservable<any[]>; 
  items: FirebaseListObservable<any[]>;
  topCategorys: FirebaseListObservable<any[]>;
  image: string [] =[];
  selectIndex: number;
  selectId:string = "";
  selectImg:string = "";
  spot: Spot;
  selectSpot: Spot;
  user:string;
  private sub: any;

  constructor(private DataService: DataService,
               public af: AngularFire,
               private route: ActivatedRoute,
               private router: Router,
                private location: Location) { 
  //  console.log('constroctor onSelectUser User id ' + this.selectId)
    //this.users = this.DataService.getFirebaseCategorys();
    //this.items = this.UidService.filterUserBy(this.selectId);
   // this.image = this.UidService.getStrageUser();
    this.topCategorys = this.DataService.getFirebaseTopCategorys();

  }
  ngOnInit() {
    
      this.sub = this.route.params.subscribe(params => {
          this.user =   params['id']; 
          this.items = this.af.database.list('/photos', {
              query: {
                orderByChild: 'displayName',
                equalTo: params['id']
              }
          });
          this.items.subscribe(items => items.forEach(
              (item , index )  => {
                firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
              } 
          ));
     });
  }
   
  onSelect(spot:Spot, idx: number ) {
    this.selectSpot = spot;
    this.selectSpot.id = idx;
  
    this.router.navigate(['gallarey/users/photos/spot',this.selectSpot.displayName,this.selectSpot.id]);
    console.log('on select to gallarey/users/photos/spot'+this.selectSpot.img);
   
 }
 goBack(): void {
    this.location.back();
  }
 
  
}
