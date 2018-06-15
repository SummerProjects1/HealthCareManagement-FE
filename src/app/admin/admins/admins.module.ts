import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddadminComponent } from './addadmin/addadmin.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';

@NgModule({
  imports: [
    CommonModule
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
