import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FlashMessagesModule } from 'angular2-flash-messages';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { ViewdoctorComponent } from './viewdoctor/viewdoctor.component';

import { DoctorService } from '../../services/doctors.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule,
  ],
  declarations: [
    AdddoctorComponent,
    ViewdoctorComponent
  ],
  exports: [
    AdddoctorComponent,
    ViewdoctorComponent
  ],

  providers: [DoctorService]
  
})
export class DoctorsModule { }
