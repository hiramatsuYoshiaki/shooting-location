import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { DataService } from '../data.service';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
   providers: [DataService],
})
export class CategoryComponent implements OnInit {

   selectCategory:string = "";
   topCategorys: FirebaseListObservable<any[]>;
   items: FirebaseListObservable<any[]>;
   image: string [] ;
 
  constructor(private DataService: DataService,private CategoryService:CategoryService) { 

    this.topCategorys = this.DataService.getFirebaseTopCategorys();
    
    this.items = this. CategoryService.filterCategoryBy(this.selectCategory);
    // this.items = this.DataService.getFirebase(); 
    this.image = this.CategoryService.getStrageCategory();
    // this.image= this.DataService.getStrage();

  }
  
  ngOnInit() {
  }

  onSelectCategory(category:string): void {
   
    this.selectCategory = category;
        this.items = this.CategoryService.filterCategoryBy(this.selectCategory); 
        this.image = this.CategoryService.getStrageCategory();
        console.log(this.selectCategory);
    
  }
  
  zoom: number = 10;
  //center point
  lat: number  = 37.2653099;
  lng: number = 136.8457031;


   


}
