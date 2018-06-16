import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {FlashMessagesModule } from 'angular2-flash-messages';
import { AddadminComponent } from './addadmin/addadmin.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule
  ],
  declarations: [
    AddadminComponent,
    ViewadminComponent
  ],
  exports: [
    AddadminComponent,
    ViewadminComponent
  ]

})
export class AdminsModule { }
