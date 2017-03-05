import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeComponent }    from '../user-home/user-home.component';
import { SelectUserComponent }     from '../select-user/select-user.component';
import { PhotoSelectComponent } from '../photo-select/photo-select.component';
import { PhotoDisplayComponent } from '../photo-display/photo-display.component';

import { routesUserRouting, routesUserProviders } from '../routes-user';


@NgModule({
  declarations: [
    UserHomeComponent,
    SelectUserComponent ,
    PhotoSelectComponent,
    PhotoDisplayComponent

  ],
  imports: [
    CommonModule,
    routesUserRouting
  ],
  providers: [
    routesUserProviders
  ]
  
})
export class UserModuleModule { }
