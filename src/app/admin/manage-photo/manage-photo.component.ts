import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

import { Spot } from '../../app.spot';
import { Category } from '../../category';



@Component({
   selector: 'app-manage-photo',
  templateUrl: './manage-photo.component.html',
  styleUrls: ['./manage-photo.component.scss']
})
export class ManagePhotoComponent implements OnInit {
  spot: Spot;
  selectSpot: Spot;
 
  items: FirebaseListObservable<any[]>;
  category: FirebaseListObservable<any[]>;
  image: string [] = [];
  uid: string;
  displayName: string;
  email: string;
  categorySW:boolean = true;
  updateSW:boolean = false;

  categoryName: string;
  categoryIntro: string;
  categoryKey: string;
  onClickIdx: number;



  folder: string;
  

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
        if(auth) {
            // console.log('You are authenticated', auth.uid);
           this.uid =  auth.uid;
        } else {
            // console.log('You are not authenticated');
        }
    });

    this.category = af.database.list('/category');
    this.category.subscribe(category => category.forEach(
    (categoryItem , index )  => {
      if(categoryItem.uid === this.uid){
        this.displayName = categoryItem.displayName;
        this.categoryName = categoryItem.photoName;
        this.categoryIntro = categoryItem.intro;
        this.categoryKey = categoryItem.$key;
        this.categorySW = false;
        // console.log('uid:'+this.uid+' photoName: '+ categoryItem.photoName);
      }
    }       
    ));

    this.items = this.af.database.list('/photos', {
      query: {
        orderByChild: 'uid',
        equalTo: this.uid
      }
    });
   
    this.items.subscribe(items => items.forEach(
    (item , index )  => {
      firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
    }       
    ));
    }

  ngOnInit() {
  }
  
 

  onSelect(spot:Spot,idx: number): void {
    this.selectSpot = spot;
    this.selectSpot.id = idx;
    this.onClickIdx = +idx;
  }
  
 myValueChange($event){
    this.selectSpot = $event.value;
 }
 

  updateItem(key: string,
             newid,
             newimg,
             newtitle,
             newtext,
             newplace,
             newsdate,
             newstime,
             newcamera,
             newrenze) {
    this.items.update(key, {  id: newid,
                             img: newimg,
                             title: newtitle,
                             text: newtext,
                              place: newplace,
                              sdate: newsdate,
                              stime: newstime,
                              camera: newcamera,
                              renze: newrenze,
                           });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  delete(key: string,path: string) {
        let storagePath = path;
       //let referencePath = `${this.folder}/images/` + image.$key;

        // Do these as two separate steps so you can still try delete ref if file no longer exists

        // Delete from Storage
        firebase.storage().ref().child(storagePath).delete()
        .then(
            () => {},
            (error) => console.error("Error deleting stored file",storagePath)
        );

        // Delete references
        //this.af.database.object(referencePath).remove()
        this.items.remove(key); 
        // this.selectSpot = null;

    }



  deleteEverything() {
    this.items.remove();
  }

}
