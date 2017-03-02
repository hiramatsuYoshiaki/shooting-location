import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

import { Spot } from '../app.spot';



@Component({
  selector: 'app-photo-list-crud',
  templateUrl: './photo-list-crud.component.html',
  styleUrls: ['./photo-list-crud.component.scss']
})
export class PhotoListCrudComponent implements OnInit {
  spot: Spot;
  selectSpot: Spot;
  @Input()  items: FirebaseListObservable<any[]>;
  @Input() category: FirebaseListObservable<any[]>;
  @Input()  image: string [] = [];
  @Input()  uid: string;
  @Input()  displayName: string;
  @Input()  email: string;


  folder: string;
  

  constructor(public af: AngularFire) {
    }

  ngOnInit() {
  }
  
 

  onSelect(spot:Spot,idx: number): void {
    this.selectSpot = spot;
    this.selectSpot.id = idx;
    
    if(this.selectSpot){
      console.log('on select photo');
    }else{
      console.log('off select photo');
    }
    
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
