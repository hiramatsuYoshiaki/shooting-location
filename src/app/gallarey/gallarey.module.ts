import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallareyComponent } from './gallarey.component';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';
// import { LocationComponent } from '../location/location.component';


import { GallareyRouting, GallareyProviders } from './gallarey.routes';
import { SpotComponent } from './spot/spot.component';
//angular2-google-maps
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapComponent } from './map/map.component';

@NgModule({
   declarations: [
    GallareyComponent,
    UsersComponent, 
    PhotosComponent, 
    SpotComponent, MapComponent,
    // LocationComponent
    ],
  imports: [
    CommonModule,
    GallareyRouting,
     AgmCoreModule.forRoot({
       apiKey: 'AIzaSyCgyTcCuXRCcFetU66oipTr7LvjdVaVD9c'
     }),
  ],
  providers: [
    GallareyProviders
  ] 
})
export class GallareyModule { }
