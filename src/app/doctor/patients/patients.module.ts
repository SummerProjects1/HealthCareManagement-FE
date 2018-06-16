import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';

import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { PatientService } from '../../services/patients.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],

  declarations: [AddPatientsComponent, ViewPatientsComponent],

  exports: [
  AddPatientsComponent,
  ViewPatientsComponent
  ],

  //All the services go here
  providers: [PatientService]
  
})
export class PatientsModule { }
