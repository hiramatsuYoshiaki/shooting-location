import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormsModule }   from '@angular/forms';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { Category } from '../category';

@Component({
  selector: 'app-photo-category',
  templateUrl: './photo-category.component.html',
  styleUrls: ['./photo-category.component.scss']
})
export class PhotoCategoryComponent implements OnInit {
  // @Input()  items: FirebaseListObservable<any[]>;
  // @Input() category: FirebaseListObservable<any[]>;
   category: FirebaseListObservable<any[]>;
   items: FirebaseListObservable<any[]>;
 
  //@Input()  image: string [] = [];
  image: string [] = [];
  @Input()  uid: string;
  @Input()  displayName: string;
  @Input()  email: string;
  cat: Category;
 // categoryList: Category;
 categorySW:boolean = true;
 updateSW:boolean = false;
 categoryName: string;
 categoryIntro: string;
 categoryKey: string;
 matadataName:string[];
  constructor(public af: AngularFire) {
   
    
    this.category = af.database.list('/category');
    this.category.subscribe(category => category.forEach(
    (categoryItem , index )  => {
      if(categoryItem.uid === this.uid){
        this.categoryName = categoryItem.photoName;
        this.categoryIntro = categoryItem.intro;
        this.categoryKey = categoryItem.$key;
        this.categorySW = false;
        // console.log('uid:'+this.uid+' photoName: '+ categoryItem.photoName);
      }
       
    }       
    ));



     
   }

  ngOnInit() {
    
    this.items = this.af.database.list('/photos', {
      query: {
        orderByChild: 'uid',
          equalTo: this.uid
      }
    });
   
    this.items.subscribe(items => items.forEach(
    (item , index )  => {
      firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
      

    //"2017-01-24T02:39:12.774Z"
    //firebase metadata
    //   var forestRef =  firebase.storage().ref().child(item.img)
    //   forestRef.getMetadata().then(metadata =>  console.log(metadata)
    //  ).catch(function(error) {
    //   });
   
    }       
    ));

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
