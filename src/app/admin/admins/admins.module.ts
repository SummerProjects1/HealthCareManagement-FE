import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FlashMessagesModule } from 'angular2-flash-messages';
import {PopupModule} from 'ng2-opd-popup';

import { AddadminComponent } from './addadmin/addadmin.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';

import { AdminService } from '../../services/admins.service';



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule,
    PopupModule.forRoot()
  ],
  declarations: [
    AddadminComponent,
    ViewadminComponent
  ],
  exports: [
    AddadminComponent,
    ViewadminComponent
  ],

  providers: [AdminService]
  
})
export class AdminsModule { }
