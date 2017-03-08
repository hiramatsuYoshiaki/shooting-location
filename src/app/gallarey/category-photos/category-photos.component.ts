import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { Spot } from '../../app.spot';


@Component({
  selector: 'app-category-photos',
  templateUrl: './category-photos.component.html',
  styleUrls: ['./category-photos.component.scss']
})
export class CategoryPhotosComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  image: string [] =[];
  user:string;
   category:string;
  private sub: any;
  itemsCategory:Spot[]=[];
  i:number = 0;
  constructor( public af: AngularFire,
               private route: ActivatedRoute,
               private router: Router,) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
          this.user =   params['id']; 
           this.category =   params['category']; 
          console.log( params['id']);
          console.log(params['category']);
          this.items = this.af.database.list('/photos', {
              query: {
                orderByChild: 'displayName',
                equalTo: params['id']
              }
          });
          var i:number = 0;
          this.items.subscribe(items => items.forEach(
              (item , index )  => {
                 
                  if(item.category === params['category']){
                     this.i++;
                    this.itemsCategory.push(item);
                    firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
                    console.log( item.title);
                    console.log( index);
                    console.log( this.image[index]);
                   

                  }
               } 
           ));
           
          //  this.itemsCategory.forEach(
          //     ( itemsCategory , index )  => {
          //            firebase.storage().ref().child(itemsCategory.img).getDownloadURL().then(url => this.image[index] = url)
          //            console.log(' itemsCategory ' +  this.image[index])
          //     }
              
          //  );
         
      });     
     
  }

}
