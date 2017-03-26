import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

import { Spot } from '../../app.spot';
import { Category } from '../../category';

import { DataService } from '../../data.service';
import { CategoryService } from '../../category.service';

interface topCategory {
    //img: string;
    name: string;
    cnt: number;
}
interface itemsCategory {
    img: string;
    category: string;
    tag: string;
}
interface category_table {
    id: number;
    name: string;
    cnt: number;
    prog: number;
}
const CATEGORY_LIST: category_table[] = [
  { id: 1, name: 'Twilite',cnt:0,prog:0 },
  { id: 2, name: 'Night',cnt:0,prog:0 },
  { id: 3, name: 'Natures',cnt:0,prog:0 },
  { id: 4, name: 'Structures',cnt:0,prog:0 },
  { id: 5, name: 'Vehicles',cnt:0,prog:0 },
  { id: 6, name: 'Peples',cnt:0,prog:0 },
  { id: 7, name: 'Creatures',cnt:0,prog:0 },
  { id: 8, name: 'Bycicle',cnt:0,prog:0 },
  { id: 9, name: 'Others',cnt:0,prog:0 }
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DataService],
})
export class DashboardComponent implements OnInit {
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

  topCategorys: FirebaseListObservable<any[]>;
  categort_name: string [];
  
  cat_twilite: number = 0;
  category_list:category_table[] = CATEGORY_LIST;
 

  cats_obj  = {
    Twilite:{name:'Twilite',cnt:0},
    Night:{name:'Night',cnt:0},
    Natures:{name:'Natures',cnt:0},
    Structures:{name:'Structures',cnt:0},
    Vehcles:{name:'Vehicles',cnt:0},
    Peples:{name:'Peples',cnt:0},
    Creturers:{name:'Creatures',cnt:0},
    Bycicle: {name:'Bycicle',cnt:0},
    Others:{name:'Others',cnt:0}
  };

//type type1 = {[key: string]: string}; // 別名を指定
//var list: type1 = { "first": "abc", "second": "def" };


cats_name: string [] = [];
items_category: itemsCategory [] = [];
cats_top: topCategory []= [];
// interface topCategory {
//     name: string;
//     cnt: number;
// }
category_cnt: number []  ;
category_index: number = 0;
cnt: number = 0;
// category_name:string;  
total_cnt:number = 0; 
progres_width: number =60;
   

  constructor(public af: AngularFire,private DataService: DataService) {
    this.af.auth.subscribe(auth => {
        if(auth) {
           this.uid =  auth.uid;
        } else {
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
      }
    }       
    ));
    this.items = this.af.database.list('/photos', {
      query: {
        orderByChild: 'uid',
        equalTo: this.uid
      }
    });
    this.category_list[0].cnt = 0;
    this.category_list[1].cnt = 0;
    this.category_list[2].cnt = 0;
    this.category_list[3].cnt = 0;
    this.category_list[4].cnt = 0;
    this.category_list[5].cnt = 0;
    this.category_list[6].cnt = 0;
    this.category_list[7].cnt = 0;
    this.category_list[8].cnt = 0;
    this.category_list[0].prog = 0;
    this.category_list[1].prog = 0;
    this.category_list[2].prog = 0;
    this.category_list[3].prog = 0;
    this.category_list[4].prog = 0;
    this.category_list[5].prog = 0;
    this.category_list[6].prog = 0;
    this.category_list[7].prog = 0;
    this.category_list[8].prog = 0;
    this.total_cnt = 0;
    
   
    this.items.subscribe(items => items.forEach(
    (item , index )  => {
      
      if(item.category == this.category_list[0].name){
        this.category_list[0].cnt++;
        this.total_cnt++;
       
        
      }

       if(item.category == this.category_list[1].name){
        this.category_list[1].cnt++;
        this.total_cnt++;
        
      }

       if(item.category == this.category_list[2].name){
        this.category_list[2].cnt++;
        this.total_cnt++;
       
      }
       if(item.category == this.category_list[3].name){
        this.category_list[3].cnt++;
        this.total_cnt++;
        
      }
       if(item.category == this.category_list[4].name){
        this.category_list[4].cnt++;
        this.total_cnt++;
       
      }
       if(item.category == this.category_list[5].name){
        this.category_list[5].cnt++;
        this.total_cnt++;
        
      }
       if(item.category == this.category_list[6].name){
        this.category_list[6].cnt++;
        this.total_cnt++;
        
      }
       if(item.category == this.category_list[7].name){
        this.category_list[7].cnt++;
        this.total_cnt++;
        
      }
       if(item.category == this.category_list[8].name){
        this.category_list[8].cnt++;
        this.total_cnt++;
        
      }
      //  if(item.category == this.category_list[9].name){
      //   this.category_list[9].cnt++
      // }
        // console.log('item category: '+item.category );
       
       if(item.category == this.cats_obj.Twilite.name){
         this.cats_obj.Twilite.cnt++;
       }
       if(item.category == this.cats_obj.Night.name){
         this.cats_obj.Night.cnt++;
       }
       if(item.category == this.cats_obj.Natures.name){
         this.cats_obj.Natures.cnt++;
       }
       if(item.category == this.cats_obj.Structures.name){
         this.cats_obj.Structures.cnt++;
       }
       if(item.category == this.cats_obj.Vehcles.name){
         this.cats_obj.Vehcles.cnt++;
       }
        if(item.category == this.cats_obj.Peples.name){
         this.cats_obj.Peples.cnt++;
       }
       if(item.category == this.cats_obj.Creturers.name){
         this.cats_obj.Creturers.cnt++;
       }
       if(item.category == this.cats_obj.Bycicle.name){
         this.cats_obj.Bycicle.cnt++;
       }
        if(item.category == this.cats_obj.Others.name){
         this.cats_obj.Others.cnt++;
       }
       
        console.log('Twilite '+this.cats_obj['Twilite'].cnt);
        console.log('Night '+this.cats_obj['Night'].cnt);
        console.log('Natures '+this.cats_obj['Natures'].cnt);
        console.log('Structures '+this.cats_obj['Structures'].cnt);
        console.log('Vehicles '+this.cats_obj['Vehcles'].cnt);
        console.log('Peples '+this.cats_obj['Peples'].cnt);
        console.log('Creatures '+this.cats_obj['Creturers'].cnt);
        console.log('Bycicle '+this.cats_obj['Bycicle'].cnt);
        console.log('Others '+this.cats_obj['Others'].cnt);


        // console.log('Twilite2 '+this.cats_obj[item.category].name);

        //this.cats_obj.Night.cnt++;
        //console.log('Twilite1 '+this.cats_obj.Night.cnt);
        //console.log('Twilite2 '+this.cats_obj['Night'].cnt);
        
        //console.log('Twilite 999 '+this.cats_obj[].cnt);
        //console.log('category: '+item.category+'cnt: '+this.cats_obj[item.category].cnt);

    }
    ));
  //  cats_obj  = {
  //   Twilite:{name:'Twilite',cnt:1},
  //   Night:{name:'Night',cnt:2},
  //   Natures:{name:'Natures',cnt:3},
  //   Structures:{name:'Structures',cnt:4},
  //   Vehcles:{name:'Vehicles',cnt:5},
  //   Peples:{name:'Peples',cnt:6},
  //   Creturers:{name:'Creatures',cnt:7},
  //   Bycicle: {name:'Bycicle',cnt:8},
  //   Others:{name:'Others',cnt:9}
  // };
//type type1 = {[key: string]: string}; // 別名を指定
//var list: type1 = { "first": "abc", "second": "def" };
// var persons = new PersonDictionary([
//     { key: "p1", value: { firstName: "F1", lastName: "L2" } },
//     { key: "p2", value: { firstName: "F2", lastName: "L2" } },
//     { key: "p3", value: { firstName: "F3", lastName: "L3" } }
// ]).toLookup();


// alert(persons["p1"].firstName + " " + persons["p1"].lastName);

    //カテゴリー
    this.topCategorys = this.DataService.getFirebaseTopCategorys();

    this.topCategorys.subscribe(topCategory => topCategory.forEach(
       (category_item, index) =>{
          var cnt: number = 0;
       
       

           
       

        console.log('topCategory.forEach: '+category_item.name );  
        this.cats_top.push({name:category_item.name,cnt:cnt});
        console.log('topCategory.forEach------: ' + cnt);

        







        //console.log(category_item.name+ ': (' + cnt +') ' );
        // console.log('total_cnt:' + this.cnt + 'category_cnt: ' + this.category_cnt[0] ); 

       }
     ));
   
    // this.items.subscribe(items => items.forEach(
    //   (item , index )  => {
      
    //     console.log('item category: '+item.category );
        
    //     if(item.category == category_item.name){
    //          cnt++;
    //          console.log('match!!!: '+cnt)
    //     }
        
    //   }
      
    //   ));


    


 



      // for(var i=0; i<=this.topCategorys; i++) {...}
    this.items.subscribe(items => items.forEach(
    (item , index )  => {
      firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
    }       
    ));
 }

  ngOnInit() {  }
  
  // getCnt(category_item:any):number{
  //    var cnt: number = 0;
  //     this.items.subscribe(items => items.forEach(
  //             (item , index )  => {
              
  //               console.log('item category: '+item.category );
                
  //               if(item.category == category_item.name){
  //                    cnt++;
  //                    console.log('match!!!: '+cnt)
  //               }
                
  //             }
  //     ));
  //   return cnt;
    
   
  //  }



  getProg(idx:number){
    if(this.total_cnt){
          this.category_list[idx].prog = Math.round((this.category_list[idx].cnt/this.total_cnt)*100);
          return  this.category_list[idx].prog;
        }
    return 0;

  } 

}
