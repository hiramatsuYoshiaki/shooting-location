import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallareyComponent }    from './gallarey.component';

import { UsersComponent }     from './users/users.component';
import { PhotosComponent }     from './photos/photos.component';
import {SpotComponent }     from './spot/spot.component';
import {SpotMarkerComponent }     from './spot-marker/spot-marker.component';
import {CategoryPhotosComponent }     from './category-photos/category-photos.component';

const  Gallarey: Routes= [
  {
    path: 'gallarey',
    component: GallareyComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full'},
      { path: 'users', component: UsersComponent },
      { path: 'users/photos/:id', component:PhotosComponent  },
      { path: 'users/photos/:id/marker/:dsp/:img', component:SpotMarkerComponent  },
      { path: 'users/back', component:UsersComponent  },
      { path: 'users/photos/spot', component: SpotComponent },
      { path: 'users/photos/spot/:id/:idx', component: SpotComponent },
      { path: 'users/photos/back', component: UsersComponent },
      { path: 'users/photos/spot/back', component: PhotosComponent },
      { path: 'users/categoryPhotos/:id/:category', component: CategoryPhotosComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'spot', component: SpotComponent }
    ]
  }
 ];

export const GallareyProviders: any[] = [];

export const GallareyRouting: ModuleWithProviders = RouterModule.forRoot(Gallarey);

// users/photos/Yoshiaki%20Hiramatsu/marker/Yoshiaki%20Hiramatsu/%2Ftwilite%2FIMG_1364_5_6_tonemapped.jpg
//gallarey/users/categoryPhotos/Yoshiaki%20Hiramatsu/Twilite