import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { ManagePhotoComponent } from './manage-photo/manage-photo.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {AdminRoutingProviders,AdminRoutingRouting } from './admin-routing';


@NgModule({
  declarations: [
    AdminComponent,
    ManagePhotoComponent,
    ManageUserComponent, 
    DashboardComponent
                 ],
  imports: [
    CommonModule,
    AdminRoutingRouting

  ],
  
  providers: [
    AdminRoutingProviders
  ] 
})
export class AdminModule { }
