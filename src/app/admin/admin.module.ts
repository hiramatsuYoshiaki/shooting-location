import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { ManagePhotoComponent } from './manage-photo/manage-photo.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import {AdminRoutingProviders,AdminRoutingRouting } from './admin-routing';
import { CreateUpdateComponent } from './create-update/create-update.component';
//angular2-google-maps
import { AgmCoreModule } from 'angular2-google-maps/core';
import { NewPhotoComponent } from './new-photo/new-photo.component';
import { CreateNewPhotoComponent } from './create-new-photo/create-new-photo.component';



@NgModule({
  declarations: [
    AdminComponent,
    ManagePhotoComponent,
    ManageUserComponent, 
    DashboardComponent, CreateUpdateComponent, NewPhotoComponent, CreateNewPhotoComponent
                 ],
  imports: [
    CommonModule,
    AdminRoutingRouting,
    FormsModule,
     AgmCoreModule.forRoot({
       apiKey: 'AIzaSyCgyTcCuXRCcFetU66oipTr7LvjdVaVD9c'
     }),
     
  ],
  
  providers: [
    AdminRoutingProviders
  ] 
})
export class AdminModule { }
