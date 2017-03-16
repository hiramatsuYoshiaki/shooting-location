import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { FormsModule }   from '@angular/forms';
import { DialogService }  from '../../dialog.service';

import { Spot } from '../../app.spot';
import { Category } from '../../category';
// import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

 //クエリパラメータとフラグメント
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { SelectivePreloadingStrategy } from '../selective-preloading-strategy';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    category: FirebaseListObservable<any[]>;
    items: FirebaseListObservable<any[]>;
    image: string [] = [];
    uid: string;
    displayName: string;
    email: string;
    categoryList: Category;
    categorySW:boolean = true;
    updateSW:boolean = false;
    categoryName: string;
    categoryIntro: string;
    nameNoChenge: string;
    introNoChenge: string;
    categoryKey: string;

    //クエリパラメータとフラグメント
    sessionId: Observable<string>;
    token: Observable<string>;
    modules: string[];

  constructor(public af: AngularFire,
              public dialogService: DialogService,
              private route: ActivatedRoute) { 

    // this.modules = preloadStrategy.preloadedModules;
   
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
        this.categoryName = categoryItem.photoName;
        this.categoryIntro = categoryItem.intro;
        this.nameNoChenge = categoryItem.photoName;
        this.introNoChenge = categoryItem.intro;
        this.categoryKey = categoryItem.$key;
        this.categorySW = false;
        // console.log('uid:'+this.uid+' photoName: '+ categoryItem.photoName);
      }
    }       
    ));

    // this.items = this.af.database.list('/photos', {
    //   query: {
    //     orderByChild: 'uid',
    //     equalTo: this.uid
    //   }
    // });
   
    // this.items.subscribe(items => items.forEach(
    // (item , index )  => {
    //   firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
    // }       
    // ));
    
  }

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.route
      .queryParams
      .map(params => params['session_id'] || 'None');

    // Capture the fragment if available
    this.token = this.route
      .fragment
      .map(fragment => fragment || 'None');
 

  }


  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.categoryName || this.categoryName === this.nameNoChenge 
       ) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('ユーザー情報の修正をキャンセルしますか？');
  }

  newUser(photoName:string,intro:string){
   // console.log("displayName: "+this.displayName + " email: "+ this.email+ " uid "+ this.uid);
   // console.log("photoName: "+ photoName + " intro: "+ intro);
    this.category.push({ 
                          cate1:"",
                          cate2:"",
                          cate3:"",
                          cate4:"",
                          cate5:"",
                          cate6:"",
                          cate7:"",
                          displayName:this.displayName,
                          email: this.email,
                          intro:intro,
                          photoName: photoName,
                          uid:this.uid
    });
  }
  updateUser(key: string, photoName:string, intro:string){
     this.category.update(key, { 
                            cate1:"",
                            cate2:"",
                            cate3:"",
                            cate4:"",
                            cate5:"",
                            cate6:"",
                            cate7:"",
                            displayName:this.displayName,
                            email: this.email,
                            intro:intro,
                            photoName: photoName,
                            uid:this.uid
                           });
     this.updateSW = false;              

  }
    deleteUser(key: string) {    
    this.category.remove(key); 
    this.categorySW = true;
    this.categoryName = null;
    this.categoryIntro = null;
   
  }
  

}
