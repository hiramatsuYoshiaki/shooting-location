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
    total: number;
    position:number;
    pos_leng:number;
    position_r:number;
    pos_leng_r:number;
    position_l:number;
    pos_leng_l:number;

}
const CATEGORY_LIST: category_table[] = [
  { id: 1, name: 'Twilite',cnt:0,prog:0,total:0,position:0,pos_leng:0,position_r:0,pos_leng_r:0,position_l:0,pos_leng_l:0 },
  { id: 2, name: 'Night',cnt:0,prog:0,total:0,position:0,pos_leng:0,position_r:0,pos_leng_r:0,position_l:0,pos_leng_l:0 },
  { id: 3, name: 'Natures',cnt:0,prog:0,total:0,position:0,pos_leng:0,position_r:0,pos_leng_r:0,position_l:0,pos_leng_l:0 },
  { id: 4, name: 'Structures',cnt:0,prog:0,total:0,position:0,pos_leng:0,position_r:0,pos_leng_r:0,position_l:0,pos_leng_l:0 },
  { id: 5, name: 'Vehicles',cnt:0,prog:0,total:0,position:0,pos_leng:0,position_r:0,pos_leng_r:0,position_l:0,pos_leng_l:0 },
  { id: 6, name: 'Peples',cnt:0,prog:0,total:0,position:0,pos_leng:0,position_r:0,pos_leng_r:0,position_l:0,pos_leng_l:0 },
  { id: 7, name: 'Creatures',cnt:0,prog:0,total:0,position:0,pos_leng:0,position_r:0,pos_leng_r:0,position_l:0,pos_leng_l:0 },
  { id: 8, name: 'Bycicle',cnt:0,prog:0,total:0,position:0,pos_leng:0,position_r:0,pos_leng_r:0,position_l:0,pos_leng_l:0 },
  { id: 9, name: 'Others',cnt:0,prog:0,total:0,position:0,pos_leng:0,position_r:0,pos_leng_r:0,position_l:0,pos_leng_l:0 }
];
interface Date_table {
    year: number;
    m1: number;
    m2: number;
    m3: number;
    m4: number;
    m5:number;
    m6:number;
    m7:number;
    m8:number;
    m9:number;
    m10:number;
    m11:number;
    m12:number;
    mAll:number;
    new_cnt:number;

}
// const DATE_TABLE: date_table[] = [
//   { act_year: 2000, m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m9:0,m10:0,m11:0,m12:0 },
 
// ];

interface List_Place {
    id: number;
    name: string;
    cnt: number;
}
const LIST_PLACE: List_Place[] = [
  { id: 1, name: '北海道',cnt:0 },
  { id: 2, name: '青森県' ,cnt:0 },
  { id: 3, name: '岩手県' ,cnt:0 },
  { id: 4, name: '宮城県' ,cnt:0 },
  { id: 5, name: '秋田県' ,cnt:0 },
  { id: 6, name: '山形県' ,cnt:0 },
  { id: 7, name: '福島県' ,cnt:0 },
  { id: 8, name: '茨城県' ,cnt:0 },
  { id: 9, name: '栃木県' ,cnt:0 },
  { id: 10, name: '群馬県' ,cnt:0 },
  { id: 11, name: '埼玉県' ,cnt:0 },
  { id: 12, name: '千葉県' ,cnt:0 },
  { id: 13, name: '東京都' ,cnt:0 },
  { id: 14, name: '神奈川県' ,cnt:0 },
  { id: 15, name: '新潟県' ,cnt:0 },
  { id: 16, name: '富山県' ,cnt:0 },
  { id: 17, name: '石川県' ,cnt:0 },
  { id: 18, name: '福井県' ,cnt:0 },
  { id: 19, name: '山梨県' ,cnt:0 },
  { id: 20, name: '長野県' ,cnt:0 },
  { id: 21, name: '岐阜県' ,cnt:0 },
  { id: 22, name: '静岡県' ,cnt:0 },
  { id: 23, name: '愛知県' ,cnt:0 },
  { id: 24, name: '三重県' ,cnt:0 },
  { id: 25, name: '滋賀県' ,cnt:0 },
  { id: 26, name: '京都府' ,cnt:0 },
  { id: 27, name: '大阪府' ,cnt:0 },
  { id: 28, name: '兵庫県' ,cnt:0 },
  { id: 29, name: '奈良県' ,cnt:0 },
  { id: 30, name: '和歌山県',cnt:0 },
  { id: 31, name: '鳥取県' ,cnt:0 },
  { id: 32, name: '島根県' ,cnt:0 },
  { id: 33, name: '岡山県' ,cnt:0 },
  { id: 34, name: '広島県' ,cnt:0 },
  { id: 35, name: '山口県' ,cnt:0 },
  { id: 36, name: '徳島県' ,cnt:0 },
  { id: 37, name: '香川県' ,cnt:0 },
  { id: 38, name: '愛媛県' ,cnt:0 },
  { id: 39, name: '高知県' ,cnt:0 },
  { id: 40, name: '福岡県' ,cnt:0 },
  { id: 41, name: '佐賀県' ,cnt:0 },
  { id: 42, name: '長崎県' ,cnt:0 },
  { id: 43, name: '熊本県' ,cnt:0 },
  { id: 44, name: '大分県' ,cnt:0 },
  { id: 45, name: '宮崎県' ,cnt:0 },
  { id: 46, name: '鹿児島県' ,cnt:0 },
  { id: 47, name: '沖縄県' ,cnt:0 },
  { id: 99, name: '海外' ,cnt:0 }
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
  list_place: List_Place[] = LIST_PLACE;
  date_table: Date_table[] = [];
  date = new Date();
  now_year:number;
  now_month:number;
  now_day:number;
  date_dsp:Boolean = false;



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
new_cnt:number = 0; 
posted_category:number =0;
year_posted:number =0;
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

    for(var i=0; i<48; i++){
             this.list_place[i].cnt =0;
     }

     
     this.new_cnt =0;
     //this.date = new Date();
     this.now_year = this.date.getFullYear();
     this.now_month = this.date.getMonth();
     this.now_day = this.date.getDate();
     console.log(this.date.getFullYear());
     console.log(this.date.getMonth());
     console.log(this.date.getDate());
     for(var i=0; i<10; i++){
        var set_year = this.now_year - i;
         console.log('table set year:' +set_year);
        this.date_table.push({
            year: set_year,
              m1: 0,
              m2: 0,
              m3: 0,
              m4: 0,
              m5: 0,
              m6: 0,
              m7: 0,
              m8: 0,
              m9: 0,
              m10: 0,
              m11: 0,
              m12: 0,
              mAll:0,
             new_cnt:0,
           
     });
     }
  
this.posted_category =0;
this.year_posted =0;

 
//------------------------------------------
// データから情報を集計する forEach
//------------------------------------------
    this.items.subscribe(items => items.forEach(
    (item , index )  => {
      
      if(item.category == this.category_list[0].name){
       
        this.category_list[0].cnt++;
        this.total_cnt++;
        if(this.category_list[0].cnt === 1){
           //  posted category  
           this.posted_category++
        }
        

      }
      
      
      if(item.category == this.category_list[1].name){
        this.category_list[1].cnt++;
        this.total_cnt++;
         if(this.category_list[1].cnt === 1){
           //  posted category  
           this.posted_category++
        }
        
      }

       if(item.category == this.category_list[2].name){
        this.category_list[2].cnt++;
        this.total_cnt++;
         if(this.category_list[2].cnt === 1){
           //  posted category  
           this.posted_category++
        }
       
      }
       if(item.category == this.category_list[3].name){
        this.category_list[3].cnt++;
        this.total_cnt++;
         if(this.category_list[3].cnt === 1){
           //  posted category  
           this.posted_category++
        }
        
      }
       if(item.category == this.category_list[4].name){
        this.category_list[4].cnt++;
        this.total_cnt++;
         if(this.category_list[4].cnt === 1){
           //  posted category  
           this.posted_category++
        }
       
      }
       if(item.category == this.category_list[5].name){
        this.category_list[5].cnt++;
        this.total_cnt++;
         if(this.category_list[5].cnt === 1){
           //  posted category  
           this.posted_category++
        }
        
      }
       if(item.category == this.category_list[6].name){
        this.category_list[6].cnt++;
        this.total_cnt++;
         if(this.category_list[6].cnt === 1){
           //  posted category  
           this.posted_category++
        }
        
      }
       if(item.category == this.category_list[7].name){
        this.category_list[7].cnt++;
        this.total_cnt++;
         if(this.category_list[7].cnt === 1){
           //  posted category  
           this.posted_category++
        }
        
      }
       if(item.category == this.category_list[8].name){
        this.category_list[8].cnt++;
        this.total_cnt++;
         if(this.category_list[8].cnt === 1){
           //  posted category  
           this.posted_category++
        }
        
      }
      // set place
      for(var i=0; i<48; i++){
        if(item.place == this.list_place[i].name){
        this.list_place[i].cnt++;
        console.log('name: '+this.list_place[i].name+ ' cnt:' + this.list_place[i].cnt);
        }
      }

      // console.log(Date.parse(item.sdate));
      var now_year = new Date().getFullYear();
      var now_month = new Date().getMonth() + 1;

      var item_date = new Date(Date.parse(item.sdate))
      console.log( 'item title ' +  item.title +  ' item sdate ' +  item.sdate);
      console.log( 'item date year ' + item_date.getFullYear() );
      console.log( 'item date month ' + (item_date.getMonth() + 1) );
      console.log( 'item date day ' + item_date.getDate() );

      // set date
      var item_date = new Date(Date.parse(item.sdate));
      var item_date_yera =  item_date.getFullYear();
      var item_date_month =  item_date.getMonth() + 1;

      if(item_date_yera == now_year && item_date_month == now_month){
        this.new_cnt++;
         console.log( 'new cnt ' + this.new_cnt );
      };
      if(item_date_yera == now_year ){
        this.year_posted++;
         console.log( 'year_posted ' + this.year_posted );
      };

      for(var i=0; i<10; i++){
        

        if(this.date_table[i].year == item_date_yera){
            this.date_table[i]. mAll++;
            if(item_date_month == 1){ this.date_table[i].m1++; }
            if(item_date_month == 2){ this.date_table[i].m2++; }
            if(item_date_month == 3){ this.date_table[i].m3++; }
            if(item_date_month == 4){ this.date_table[i].m4++; }
            if(item_date_month == 5){ this.date_table[i].m5++; }
            if(item_date_month == 6){ this.date_table[i].m6++; }
            if(item_date_month == 7){ this.date_table[i].m7++; }
            if(item_date_month == 8){ this.date_table[i].m8++; }
            if(item_date_month == 9){ this.date_table[i].m9++; }
            if(item_date_month == 10){ this.date_table[i].m10++; }
            if(item_date_month == 11){ this.date_table[i].m11++; }
            if(item_date_month == 12){ this.date_table[i].m12++; }
           
            console.log('year: '+ item_date_yera 
             + ' m1:' + this.date_table[i].m1
             + ' m2:' + this.date_table[i].m2
             + ' m3:' + this.date_table[i].m3
             + ' m4:' + this.date_table[i].m4
             + ' m5:' + this.date_table[i].m5
             + ' m6:' + this.date_table[i].m6
             + ' m7:' + this.date_table[i].m7
             + ' m8:' + this.date_table[i].m8
             + ' m9:' + this.date_table[i].m9
             + ' m10:' + this.date_table[i].m10
             + ' m11:' + this.date_table[i].m11
             + ' m12:' + this.date_table[i].m12
             + ' All:' + this.date_table[i].mAll
           
             );
        }
        
      }

      // set shooting date
      // for(var i=0; i<10; i++){
      //   if(item.place == this.list_place[i].name){
      //   this.list_place[i].cnt++;
      //   console.log('name: '+this.list_place[i].name+ ' cnt:' + this.list_place[i].cnt);
      //   }
      // }


      if(this.total_cnt !== 0 || this.total_cnt !== null){
     
          this.category_list[0].total = this.total_cnt;
          //this.category_list[0].prog = Math.round(( this.category_list[0].cnt / this.category_list[0].total )*100);
          this.category_list[0].prog = ( this.category_list[0].cnt / this.category_list[0].total )*100;
          this.category_list[0].position = 0;
          //this.category_list[0].pos_leng = Math.round(( this.category_list[0].cnt / this.category_list[0].total)*360);
          this.category_list[0].pos_leng = ( this.category_list[0].cnt / this.category_list[0].total)*360;
          // console.log('category:'+this.category_list[0].name +  ' prog: ' + this.category_list[0].prog 
          // + ' position:'+ this.category_list[0].position + ' pos_leng:'+ this.category_list[0].pos_leng);

          if(this.category_list[0].pos_leng > 180){
            this.category_list[0].pos_leng_r = 180;
            this.category_list[0].position_r = this.category_list[0].position;
            this.category_list[0].pos_leng_l = this.category_list[0].pos_leng - 180;
            this.category_list[0].position_l =  this.category_list[0].position + 180 ;
          }else{
            this.category_list[0].pos_leng_r = this.category_list[0].pos_leng;
            this.category_list[0].position_r = this.category_list[0].position;
            this.category_list[0].pos_leng_l = 0;
            this.category_list[0].position_l = 0;
          }

          this.category_list[1].total = this.total_cnt;
          //this.category_list[1].prog = Math.round(( this.category_list[1].cnt / this.category_list[1].total )*100);
          this.category_list[1].prog =( this.category_list[1].cnt / this.category_list[1].total )*100;
          //this.category_list[1].position =  Math.round(( this.category_list[0].prog/100)*360);
          this.category_list[1].position =  ( this.category_list[0].prog/100)*360;
         // this.category_list[1].pos_leng = Math.round(( this.category_list[1].cnt / this.category_list[1].total)*360);
          this.category_list[1].pos_leng = ( this.category_list[1].cnt / this.category_list[1].total)*360;
        // console.log('category:'+this.category_list[1].name +  ' prog: ' + this.category_list[1].prog 
        //   + ' position:'+ this.category_list[1].position + ' pos_leng:'+ this.category_list[1].pos_leng);
          if(this.category_list[1].pos_leng > 180){
            this.category_list[1].pos_leng_r = 180;
            this.category_list[1].position_r = this.category_list[1].position;
            this.category_list[1].pos_leng_l = this.category_list[1].pos_leng - 180;
            this.category_list[1].position_l =  this.category_list[1].position + 180 ;
          }else{
            this.category_list[1].pos_leng_r = this.category_list[1].pos_leng;
            this.category_list[1].position_r = this.category_list[1].position;
            this.category_list[1].pos_leng_l = 0;
            this.category_list[1].position_l = 0;
          }
          
          this.category_list[2].total = this.total_cnt;
          //this.category_list[2].prog = Math.round(( this.category_list[2].cnt / this.category_list[2].total )*100);
          this.category_list[2].prog =( this.category_list[2].cnt / this.category_list[2].total )*100;
          //this.category_list[2].position =  Math.round(((this.category_list[0].prog + this.category_list[1].prog)/100)*360);
          this.category_list[2].position = ((this.category_list[0].prog + this.category_list[1].prog)/100)*360;
         // this.category_list[2].pos_leng = Math.round(( this.category_list[2].cnt / this.category_list[2].total)*360);
          this.category_list[2].pos_leng =( this.category_list[2].cnt / this.category_list[2].total)*360;
        // console.log('category:'+this.category_list[2].name +  ' prog: ' + this.category_list[2].prog 
        //   + ' position:'+ this.category_list[2].position + ' pos_leng:'+ this.category_list[2].pos_leng);
           if(this.category_list[2].pos_leng > 180){
            this.category_list[2].pos_leng_r = 180;
            this.category_list[2].position_r = this.category_list[2].position;
            this.category_list[2].pos_leng_l = this.category_list[2].pos_leng - 180 ;
            this.category_list[2].position_l =  this.category_list[2].position + 180;
          }else{
            this.category_list[2].pos_leng_r = this.category_list[2].pos_leng;
            this.category_list[2].position_r = this.category_list[2].position;
            this.category_list[2].pos_leng_l = 0;
            this.category_list[2].position_l = 0;
          }
          

          this.category_list[3].total = this.total_cnt;
         // this.category_list[3].prog = Math.round(( this.category_list[3].cnt / this.category_list[3].total )*100);
          this.category_list[3].prog =( this.category_list[3].cnt / this.category_list[3].total )*100;
         // this.category_list[3].position =  Math.round(((this.category_list[0].prog + this.category_list[1].prog + this.category_list[2].prog)/100)*360);
          this.category_list[3].position =  ((this.category_list[0].prog + this.category_list[1].prog + this.category_list[2].prog)/100)*360;
         // this.category_list[3].pos_leng = Math.round(( this.category_list[3].cnt / this.category_list[3].total)*360);
          this.category_list[3].pos_leng =( this.category_list[3].cnt / this.category_list[3].total)*360;
          if(this.category_list[3].pos_leng > 180){
            this.category_list[3].pos_leng_r = 180;
            this.category_list[3].position_r = this.category_list[3].position;
            this.category_list[3].pos_leng_l = this.category_list[3].pos_leng - 180;
            this.category_list[3].position_l =  this.category_list[3].position + 180 ;
          }else{
            this.category_list[3].pos_leng_r = this.category_list[3].pos_leng;
            this.category_list[3].position_r = this.category_list[3].position;
            this.category_list[3].pos_leng_l = 0;
            this.category_list[3].position_l = 0;
          }

          this.category_list[4].total = this.total_cnt;
         // this.category_list[4].prog = Math.round(( this.category_list[4].cnt / this.category_list[4].total )*100);
          this.category_list[4].prog = ( this.category_list[4].cnt / this.category_list[4].total )*100;
         // this.category_list[4].prog = Math.round(( this.category_list[4].cnt / this.category_list[4].total )*100);
          this.category_list[4].prog =( this.category_list[4].cnt / this.category_list[4].total )*100;
          // this.category_list[4].position =  Math.round(((this.category_list[0].prog 
          //                                               + this.category_list[1].prog 
          //                                               + this.category_list[2].prog
          //                                               + this.category_list[3].prog
          //                                               )
          //                                               /100)*360);
           this.category_list[4].position = ((this.category_list[0].prog 
                                                        + this.category_list[1].prog 
                                                        + this.category_list[2].prog
                                                        + this.category_list[3].prog
                                                        )
                                                        /100)*360;
                                                        
          //this.category_list[4].pos_leng = Math.round(( this.category_list[4].cnt / this.category_list[4].total)*360);
          this.category_list[4].pos_leng =( this.category_list[4].cnt / this.category_list[4].total)*360;
          if(this.category_list[4].pos_leng > 180){
            this.category_list[4].pos_leng_r = 180;
            this.category_list[4].position_r = this.category_list[4].position;
            this.category_list[4].pos_leng_l = this.category_list[4].pos_leng - 180;
            this.category_list[4].position_l =  this.category_list[4].position + 180 ;
          }else{
            this.category_list[4].pos_leng_r = this.category_list[4].pos_leng;
            this.category_list[4].position_r = this.category_list[4].position;
            this.category_list[4].pos_leng_l = 0;
            this.category_list[4].position_l = 0;
          }


          this.category_list[5].total = this.total_cnt;
          //this.category_list[5].prog = Math.round(( this.category_list[5].cnt / this.category_list[5].total )*100);
          this.category_list[5].prog = ( this.category_list[5].cnt / this.category_list[5].total )*100;
          this.category_list[5].position =  Math.round(((this.category_list[0].prog 
                                                        + this.category_list[1].prog 
                                                        + this.category_list[2].prog
                                                        + this.category_list[3].prog
                                                        + this.category_list[4].prog
                                                        )
                                                        /100)*360);
          this.category_list[5].position = ((this.category_list[0].prog 
                                                        + this.category_list[1].prog 
                                                        + this.category_list[2].prog
                                                        + this.category_list[3].prog
                                                        + this.category_list[4].prog
                                                        )
                                                        /100)*360;
          //this.category_list[5].pos_leng = Math.round(( this.category_list[5].cnt / this.category_list[5].total)*360);
          this.category_list[5].pos_leng = ( this.category_list[5].cnt / this.category_list[5].total)*360;
          if(this.category_list[5].pos_leng > 180){
            this.category_list[5].pos_leng_r = 180;
            this.category_list[5].position_r = this.category_list[5].position;
            this.category_list[5].pos_leng_l = this.category_list[5].pos_leng - 180;
            this.category_list[5].position_l =  this.category_list[5].position + 180 ;
          }else{
            this.category_list[5].pos_leng_r = this.category_list[5].pos_leng;
            this.category_list[5].position_r = this.category_list[5].position;
            this.category_list[5].pos_leng_l = 0;
            this.category_list[5].position_l = 0;
          }

          this.category_list[6].total = this.total_cnt;
         // this.category_list[6].prog = Math.round(( this.category_list[6].cnt / this.category_list[6].total )*100);
          this.category_list[6].prog = ( this.category_list[6].cnt / this.category_list[6].total )*100;
          // this.category_list[6].position =  Math.round(((this.category_list[0].prog 
          //                                               + this.category_list[1].prog 
          //                                               + this.category_list[2].prog
          //                                               + this.category_list[3].prog
          //                                               + this.category_list[4].prog
          //                                               + this.category_list[5].prog
          //                                               )
          //                                               /100)*360);
           this.category_list[6].position =  ((this.category_list[0].prog 
                                                        + this.category_list[1].prog 
                                                        + this.category_list[2].prog
                                                        + this.category_list[3].prog
                                                        + this.category_list[4].prog
                                                        + this.category_list[5].prog
                                                        )
                                                        /100)*360;
          //this.category_list[6].pos_leng = Math.round(( this.category_list[6].cnt / this.category_list[6].total)*360);
          this.category_list[6].pos_leng =( this.category_list[6].cnt / this.category_list[6].total)*360;
          if(this.category_list[6].pos_leng > 180){
            this.category_list[6].pos_leng_r = 180;
            this.category_list[6].position_r = this.category_list[6].position;
            this.category_list[6].pos_leng_l = this.category_list[6].pos_leng - 180;
            this.category_list[6].position_l =  this.category_list[6].position + 180 ;
          }else{
            this.category_list[6].pos_leng_r = this.category_list[6].pos_leng;
            this.category_list[6].position_r = this.category_list[6].position;
            this.category_list[6].pos_leng_l = 0;
            this.category_list[6].position_l = 0;
          }

          this.category_list[7].total = this.total_cnt;
          //this.category_list[7].prog = Math.round(( this.category_list[7].cnt / this.category_list[7].total )*100);
          this.category_list[7].prog =( this.category_list[7].cnt / this.category_list[7].total )*100;
          // this.category_list[7].position =  Math.round(((this.category_list[0].prog 
          //                                               + this.category_list[1].prog 
          //                                               + this.category_list[2].prog
          //                                               + this.category_list[3].prog
          //                                               + this.category_list[4].prog
          //                                               + this.category_list[5].prog
          //                                               + this.category_list[6].prog
          //                                               )
          //                                               /100)*360);
           this.category_list[7].position =  ((this.category_list[0].prog 
                                                        + this.category_list[1].prog 
                                                        + this.category_list[2].prog
                                                        + this.category_list[3].prog
                                                        + this.category_list[4].prog
                                                        + this.category_list[5].prog
                                                        + this.category_list[6].prog
                                                        )
                                                        /100)*360;
          //this.category_list[7].pos_leng = Math.round(( this.category_list[7].cnt / this.category_list[7].total)*360);
          this.category_list[7].pos_leng =( this.category_list[7].cnt / this.category_list[7].total)*360;
         
          if(this.category_list[7].pos_leng > 180){
            this.category_list[7].pos_leng_r = 180;
            this.category_list[7].position_r = this.category_list[7].position;
            this.category_list[7].pos_leng_l = this.category_list[7].pos_leng - 180;
            this.category_list[7].position_l =  this.category_list[7].position + 180 ;
          }else{
            this.category_list[7].pos_leng_r = this.category_list[7].pos_leng;
            this.category_list[7].position_r = this.category_list[7].position;
            this.category_list[7].pos_leng_l = 0;
            this.category_list[7].position_l = 0;
          }

          this.category_list[8].total = this.total_cnt;
          // this.category_list[8].prog =  Math.round(100 - this.category_list[0].prog
          //                                               - this.category_list[1].prog
          //                                               - this.category_list[2].prog
          //                                               - this.category_list[3].prog
          //                                               - this.category_list[4].prog
          //                                               - this.category_list[5].prog
          //                                               - this.category_list[6].prog
          //                                               - this.category_list[7].prog
          //                                               );
           this.category_list[8].prog =  100 - this.category_list[0].prog
                                                        - this.category_list[1].prog
                                                        - this.category_list[2].prog
                                                        - this.category_list[3].prog
                                                        - this.category_list[4].prog
                                                        - this.category_list[5].prog
                                                        - this.category_list[6].prog
                                                        - this.category_list[7].prog
                                                        ;
          // this.category_list[8].position =  Math.round(((this.category_list[0].prog 
          //                                               + this.category_list[1].prog 
          //                                               + this.category_list[2].prog
          //                                               + this.category_list[3].prog
          //                                               + this.category_list[4].prog
          //                                               + this.category_list[5].prog
          //                                               + this.category_list[6].prog
          //                                               + this.category_list[7].prog
          //                                               )
          //                                               /100)*360);
           this.category_list[8].position = ((this.category_list[0].prog 
                                                        + this.category_list[1].prog 
                                                        + this.category_list[2].prog
                                                        + this.category_list[3].prog
                                                        + this.category_list[4].prog
                                                        + this.category_list[5].prog
                                                        + this.category_list[6].prog
                                                        + this.category_list[7].prog
                                                        )
                                                        /100)*360;

          //this.category_list[8].pos_leng = Math.round( 360 - this.category_list[8].position);
          this.category_list[8].pos_leng =  360 - this.category_list[8].position;

          // console.log('category:'+this.category_list[8].name +  ' prog: ' + this.category_list[8].prog 
          // + ' position:'+ this.category_list[8].position + ' pos_leng:'+ this.category_list[8].pos_leng);
          if(this.category_list[8].pos_leng > 180){
            this.category_list[8].pos_leng_r = 180;
            this.category_list[8].position_r = this.category_list[8].position;

            //this.category_list[8].pos_leng_l = Math.round( 360 - this.category_list[8].position );
            this.category_list[8].pos_leng_l =  360 - this.category_list[8].position ;
            this.category_list[8].position_l =  this.category_list[8].position + 180 ;

          }else{
            //this.category_list[8].pos_leng_r = Math.round( 360 - this.category_list[8].position);
            this.category_list[8].pos_leng_r =  360 - this.category_list[8].position;
            this.category_list[8].position_r = this.category_list[8].position;
            this.category_list[8].pos_leng_l = 0;
            this.category_list[8].position_l = 0;
          }
          
          
           





      }
    

     
             
        
     

     
     
        // console.log('Twilite '+this.cats_obj['Twilite'].cnt);
        // console.log('Night '+this.cats_obj['Night'].cnt);
        // console.log('Natures '+this.cats_obj['Natures'].cnt);
        // console.log('Structures '+this.cats_obj['Structures'].cnt);
        // console.log('Vehicles '+this.cats_obj['Vehcles'].cnt);
        // console.log('Peples '+this.cats_obj['Peples'].cnt);
        // console.log('Creatures '+this.cats_obj['Creturers'].cnt);
        // console.log('Bycicle '+this.cats_obj['Bycicle'].cnt);
        // console.log('Others '+this.cats_obj['Others'].cnt);


       

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
        //console.log('topCategory.forEach: '+category_item.name );  
        this.cats_top.push({name:category_item.name,cnt:cnt});
       // console.log('topCategory.forEach------: ' + cnt);


        //console.log(category_item.name+ ': (' + cnt +') ' );
        // console.log('total_cnt:' + this.cnt + 'category_cnt: ' + this.category_cnt[0] ); 

       }
     ));

      // for(var i=0; i<=this.topCategorys; i++) {...}
    this.items.subscribe(items => items.forEach(
    (item , index )  => {
      firebase.storage().ref().child(item.img).getDownloadURL().then(url => this.image[index] = url)
    }       
    ));
 }

  ngOnInit() {  }
  

}
