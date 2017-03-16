import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoryService {
   itemsCategory: FirebaseListObservable<any[]>;
   itemsCategoryAll: FirebaseListObservable<any[]>;
   categorySubject: Subject<any>;
   imageCategory: string [] = [];

  constructor(public af: AngularFire) {
     //firebase fillter カテゴリーを抽出
      this.categorySubject = new Subject();
        this.itemsCategory = af.database.list('/photos', {
          query: {
            orderByChild: 'category',
            equalTo: this.categorySubject
          }
        });
      //firebase fillter 抽出したカテゴリーの画像を取得
      this.itemsCategory.subscribe(items => items.forEach(
        (item , index )  => {
          firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.imageCategory[index] = url)
      //console.log('title '+ item.title +' lat '+ item.lat[index] +' lng '+ item.lng[index]);
        } 
      ));
    }
    
      getCategory(){
         this.itemsCategoryAll = this.af.database.list('/photos');
         return this.itemsCategoryAll;
      }
      filterCategoryBy(category: string):FirebaseListObservable<any[]> {
        this.categorySubject.next(category); 
        return this.itemsCategory;
      }
      getStrageCategory():string []{
        return this.imageCategory;
      };
}
