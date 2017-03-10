
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManagePhotoComponent } from './manage-photo/manage-photo.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from '../auth-gard.service';

const AdminRouting: Routes= [
  {
    path: 'admin',
    component:  AdminComponent,
    canActivate: [AuthGuard],
    children: [
        {
            path: '',
            canActivateChild: [AuthGuard],   
            children: [
        { path: 'mPhoto', component:ManagePhotoComponent  },
        { path: 'mUser', component:ManageUserComponent  },
        { path: '', component: DashboardComponent }
        ]
      }
    ]
  }
 ];


export const  AdminRoutingProviders: any[] = [];

export const  AdminRoutingRouting: ModuleWithProviders = RouterModule.forRoot( AdminRouting);

