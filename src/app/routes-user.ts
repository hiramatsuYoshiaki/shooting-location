import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserHomeComponent }    from './user-home/user-home.component';

import { SelectUserComponent }     from './select-user/select-user.component';
import { PhotoSelectComponent } from './photo-select/photo-select.component';
import { PhotoDisplayComponent } from './photo-display/photo-display.component';



const  routesUser: Routes= [
  {
    path: 'userHome',
    component: UserHomeComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full'},
      { path: 'user', component: SelectUserComponent },
      { path: 'photoSelect/:id', component:PhotoSelectComponent },
      { path: 'user/photoSelect/:id', component:PhotoSelectComponent },
      { path: 'photoDisplay', component: PhotoDisplayComponent },
      { path: 'user/photoDisplay', component: PhotoDisplayComponent }
    ]
  }
 ];

export const routesUserProviders: any[] = [];

export const routesUserRouting: ModuleWithProviders = RouterModule.forRoot(routesUser);