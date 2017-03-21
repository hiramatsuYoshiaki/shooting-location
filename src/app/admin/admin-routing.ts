
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManagePhotoComponent } from './manage-photo/manage-photo.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { NewPhotoComponent } from './new-photo/new-photo.component';

import { AuthGuard } from '../auth-gard.service';
import { CanDeactivateGuard }     from '../can-deactivate-guard.service';

const AdminRouting: Routes= [
  { path: 'admin',
    component:  AdminComponent,
    canActivate: [AuthGuard],

    children: [
        { path: '',
          canActivateChild: [AuthGuard], 

            children: [
                { path: 'mPhoto', component:ManagePhotoComponent },
                { path: 'newPhoto', component:NewPhotoComponent },
               
                { path: 'mUser', component:ManageUserComponent,
                  canDeactivate: [CanDeactivateGuard],
              },
                { path: '', component: DashboardComponent }
            ]
         }
    ]
  }
 ];


export const  AdminRoutingProviders: any[] = [];

export const  AdminRoutingRouting: ModuleWithProviders = RouterModule.forRoot( AdminRouting);

