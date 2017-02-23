import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent }        from './app.component';
import { CategoryComponent } from './category/category.component';
import { CategoryMapComponent } from './category-map/category-map.Component';
import { CategoryPhotoComponent } from './category-photo/category-photo.component';
import { UserComponent }     from './user/user.component';
import { UserPhotoListComponent }     from './user-photo-list/user-photo-list.component';
import { LocationComponent }     from './location/location.component';
import { PhotoDetailsComponent }         from './photo-details/photo-details.component';
import { PhotoListComponent }         from './photo-list/photo-list.component';
import { PhotoLocationComponent }         from './photo-location/photo-location.component';
import { AuthComponent }         from './auth/auth.component';
import { HomeComponent }         from './home/home.component';
import { DataService }         from './data.service';
import {CategoryService }         from './category.service';

const appRoutes: Routes= [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'user', component: UserComponent },
  { path: 'list', component: PhotoListComponent },
  { path: 'acount', component: AuthComponent },
  { path: 'map', component:LocationComponent },
  { path: 'home/location/:imgURL', component:PhotoLocationComponent }
 

];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



