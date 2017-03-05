import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallareyComponent } from './gallarey.component';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';
import { GallareyRouting, GallareyProviders } from './gallarey.routes';
import { SpotComponent } from './spot/spot.component';

@NgModule({
   declarations: [
    GallareyComponent,
    UsersComponent, 
    PhotosComponent, 
    SpotComponent
    ],
  imports: [
    CommonModule,
    GallareyRouting
  ],
  providers: [
    GallareyProviders
  ] 
})
export class GallareyModule { }
