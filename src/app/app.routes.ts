import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent }        from './app.component';
import { CategoryComponent } from './category/category.component';
import { CategoryMapComponent } from './category-map/category-map.Component';
import { CategoryPhotoComponent } from './category-photo/category-photo.component';
import { UserComponent }     from './user/user.component';
import { UserPhotoList2Component }     from './user-photo-list2/user-photo-list2.component';
import { LocationComponent }     from './location/location.component';
import { PhotoDetailsComponent }         from './photo-details/photo-details.component';
import { PhotoListComponent }         from './photo-list/photo-list.component';
import { PhotoLocationComponent }         from './photo-location/photo-location.component';
import { AuthComponent }         from './auth/auth.component';
import { HomeComponent }         from './home/home.component';
import { DataService }         from './data.service';
import {CategoryService }         from './category.service';
import {PageNotFoundComponent }         from './page-not-found/page-not-found.component';
import {UserHomeComponent }         from './user-home/user-home.component';
import {GallareyComponent }         from './gallarey/gallarey.component';
import {HomeSpotComponent }         from './home/home-spot/home-spot.component';
import {CategorySpotMarkerComponent }         from './category-spot-marker/category-spot-marker.component';

// import {SelectUserComponent }         from './select-user/select-user.component';
// import {PhotoSelectComponent }         from './photo-select/photo-select.component';
// import {PhotoDisplayComponent }         from './photo-display/photo-display.component';


const appRoutes: Routes= [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'category/marker/:id/:img', component: CategorySpotMarkerComponent },
  { path: 'user', component: UserComponent },
  { path: 'userHome', component: UserHomeComponent },
  { path: 'gallarey', component: GallareyComponent },
  // { path: 'userHome/home', component: UserHomeComponent },
  // { path: 'userHome/user', component: UserComponent },
  // { path: 'userHome/userPhotoList', component: UserPhotoList2Component },
  // { path: 'userHome/user-select', component: SelectUserComponent },
  // { path: 'userHome/photo-select', component: PhotoSelectComponent },
  // { path: 'userHome/photo-display', component: PhotoDisplayComponent },
  { path: 'list', component: PhotoListComponent },
  { path: 'acount', component: AuthComponent },
 // { path: 'map', component:LocationComponent },
  { path: 'home/location/:imgURL', component:PhotoLocationComponent },
  { path: 'home/homeSpot/:imgURL', component:HomeSpotComponent },
  { path: '**', component: PageNotFoundComponent }

 

];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


///category/marker/Yoshiaki%20Hiramatsu/%2Ftwilite%2FIMG_1364_5_6_tonemapped.jpg
