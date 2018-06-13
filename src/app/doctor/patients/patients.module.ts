import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [AddPatientsComponent, ViewPatientsComponent],

  exports: [
  AddPatientsComponent,
  ViewPatientsComponent
  ]
  
})
export class PatientsModule { }
