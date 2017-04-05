import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { DataService } from '../../data.service';
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
  categorys: FirebaseListObservable<any[]>; 
  items: FirebaseListObservable<any[]>;
  topCategorys: FirebaseListObservable<any[]>;
  image: string [] =[];
  selectIndex: number;
  selectId:string = "";
  category:string = "";
  selectImg:string = "";
  spot: Spot;
  selectSpot: Spot;
  user:string;
  photoName:string;
  private sub: any;

  constructor(private DataService: DataService,
               public af: AngularFire,
               private route: ActivatedRoute,
               private router: Router,
               private location: Location) { 
  
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

          //photoName
          this.categorys = this.af.database.list('/category');
          this.categorys.subscribe(categorys => categorys.forEach(
            (category,index) => {
              if(category.displayName === this.user){
                this.photoName = category.photoName;
              }

          }));
          this.items.subscribe(items => items.forEach(
              (item , index )  => {
                firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
              } 
          ));
     });
  }
   
  onSelect(spot:Spot, idx: number, img_url:string ) {
    this.selectSpot = spot;
    this.selectSpot.id = idx;
    this.category = "all";
    this.router.navigate(
      ['gallarey/users/photos/spot',this.selectSpot.displayName,this.selectSpot.id,this.category]);
 }
 onSelectCategory(user:string, name:string){
    this.router.navigate(
      ['gallarey/users/categoryPhotos',user,name]);
 }
 goBack(): void {
    this.location.back();
  }
  
}
