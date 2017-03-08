import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//ユーザー認証　データベース　ストレージ
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
//angular2-google-maps
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { LocationComponent } from './location/location.component';
import { DataService } from './data.service';
import { CategoryService } from './category.service';
import { UidService } from './uid.service';
import { CategoryComponent } from './category/category.component';

import { routing, appRoutingProviders } from './app.routes';
// import { routesUserRouting, routesUserProviders } from './routes-user';

import { AuthComponent } from './auth/auth.component';
import { PhotoCrudComponent } from './photo-crud/photo-crud.component';
import { PhotoListCrudComponent } from './photo-list-crud/photo-list-crud.component';
import { PhotoCategoryComponent } from './photo-category/photo-category.component';
import { HomeComponent } from './home/home.component';
import { SLocationComponent } from './s-location/s-location.component';
import { CategoryMapComponent } from './category-map/category-map.component';
import { CategoryPhotoComponent } from './category-photo/category-photo.component';

import { PhotoLocationComponent } from './photo-location/photo-location.component';
import { MyDatePickerModule } from 'mydatepicker';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UserComponent } from './user/user.component';
import { UserPhotoListComponent } from './user-photo-list/user-photo-list.component';
import { UserPhotoList2Component } from './user-photo-list2/user-photo-list2.component';
//import { UserHomeComponent } from './user-home/user-home.component';
// import { SelectUserComponent } from './select-user/select-user.component';
// import { PhotoSelectComponent } from './photo-select/photo-select.component';
// import { PhotoDisplayComponent } from './photo-display/photo-display.component';
//ルーティング階層化
import { UserModuleModule } from './user-module/user-module.module';
import { GallareyModule } from './gallarey/gallarey.module';
import { HomeSpotComponent } from './home/home-spot/home-spot.component';
import { CategorySpotMarkerComponent } from './category-spot-marker/category-spot-marker.component';




export const firebaseConfig ={
    apiKey: "AIzaSyCmCi_uILBRJP7pXiNIc8r07H9Q2Rt3WPY",
    authDomain: "mychat-ed85a.firebaseapp.com",
    databaseURL: "https://mychat-ed85a.firebaseio.com",
    storageBucket: "mychat-ed85a.appspot.com",
    messagingSenderId: "716398680108"
}

//ユーザー認証
const FirebaseAuthConfig = {
  provider: AuthProviders.Google,
   method: AuthMethods.Redirect
  // method: AuthMethods.Popup,
  // remember: 'default',
  // scope:['email']
    
};

@NgModule({
  declarations: [
    AppComponent,
    PhotoDetailsComponent,
    PhotoListComponent,
    LocationComponent,
    CategoryComponent,
    AuthComponent,
    PhotoCrudComponent,
    PhotoListCrudComponent,
    PhotoCategoryComponent,
    HomeComponent,
    SLocationComponent,
    CategoryMapComponent,
    CategoryPhotoComponent,
    PhotoLocationComponent,
    PageNotFoundComponent,
    UserComponent,
    UserPhotoListComponent,
    UserPhotoList2Component,
    HomeSpotComponent,
    CategorySpotMarkerComponent,
  
    //UserHomeComponent,
    // SelectUserComponent,
    // PhotoSelectComponent,
    // PhotoDisplayComponent

  
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    routing,
    // routesUserRouting,
    //AngularFireModule.initializeApp(firebaseConfig)
    AngularFireModule.initializeApp(firebaseConfig, FirebaseAuthConfig),
    //angular2-google-maps
    HttpModule,
     AgmCoreModule.forRoot({
       apiKey: 'AIzaSyCgyTcCuXRCcFetU66oipTr7LvjdVaVD9c'
     }),
     //ルーティング階層化
     UserModuleModule,
     GallareyModule
    
  ],
  providers: [DataService,
              CategoryService,
              UidService,
              appRoutingProviders,
              // routesUserProviders
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
