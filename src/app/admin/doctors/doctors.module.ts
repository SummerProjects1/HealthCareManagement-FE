import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { ViewdoctorComponent } from './viewdoctor/viewdoctor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdddoctorComponent,
    ViewdoctorComponent
  ],
  exports: [
    CommonModule,
    AdddoctorComponent,
    ViewdoctorComponent
  ],
  
})
export class DoctorsModule { }
