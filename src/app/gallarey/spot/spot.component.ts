import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Spot } from '../../app.spot';
import { Category } from '../../category';
import { slideInDownAnimation } from '../../animation';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss'],
  animations: [ slideInDownAnimation ]
})
export class SpotComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  image: string ;
  user:string;
  category:string;
  idx:number;
  private sub: any;
  selectSpot: Spot;
  zoom: number = 12;

  constructor(  public af: AngularFire,
                private route: ActivatedRoute,
                private router: Router,
                private location: Location) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.user = params['id']; 
        this.idx = +params['idx']; 
        this.category = params['category']; 
      });
      this.sub = this.route.params.subscribe(params => {
   
          this.items = this.af.database.list('/photos', {
              query: {
                orderByChild: 'displayName',
                equalTo: params['id']
              }
          });

          if(this.category == "all"){

            this.items.subscribe(items => items.forEach(
                  (item , index )  => {
                    if(index === this.idx){
                      this.selectSpot = item;
                      this.selectSpot.id = this.idx;
                      firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image = url)
                    }
                  } 
              ));
          }else{
            var i:number =0;
            this.items.subscribe(items => items.forEach(
                (item , index )  => {
                    if(item.category === this.category){
                        if(i === this.idx){
                          this.selectSpot = item;
                          this.selectSpot.id = this.idx;
                          firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image = url)
                        }
                      //item.id = index;
                     // this.itemsCategory.push(item);
                      //firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
                      i++;
                    }
                } 
              ));
                  

          }
              
      });
      
  }
  goBack(): void {
    this.location.back();
  }

}


 
