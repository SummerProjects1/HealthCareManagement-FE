import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionAddComponent } from './prescription-add/prescription-add.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import {FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PrescriptionAddComponent,
     PrescriptionListComponent
    ],
    exports: [
      PrescriptionListComponent,
      PrescriptionAddComponent,
      CommonModule
      
    ]
})
export class PrescriptionModule { }
