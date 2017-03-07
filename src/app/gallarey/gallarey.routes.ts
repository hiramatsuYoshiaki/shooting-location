import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallareyComponent }    from './gallarey.component';

import { UsersComponent }     from './users/users.component';
import { PhotosComponent }     from './photos/photos.component';
import {SpotComponent }     from './spot/spot.component';

const  Gallarey: Routes= [
  {
    path: 'gallarey',
    component: GallareyComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full'},
      { path: 'users', component: UsersComponent },
      { path: 'users/photos/:id', component:PhotosComponent  },
      { path: 'users/back', component:UsersComponent  },
      { path: 'users/photos/spot', component: SpotComponent },
      { path: 'users/photos/spot/:id/:idx', component: SpotComponent },
      { path: 'users/photos/back', component: UsersComponent },
      { path: 'users/photos/spot/back', component: PhotosComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'spot', component: SpotComponent }
     
    ]
  }
 ];

export const GallareyProviders: any[] = [];

export const GallareyRouting: ModuleWithProviders = RouterModule.forRoot(Gallarey);

// <li><a routerLink="photos">PHOTOS SELECT</a></li>