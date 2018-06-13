import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CommonModule } from '@angular/common';

import { DoctorComponent } from './doctor.component';

@NgModule({
    declarations: [
        DoctorComponent
    ],
    imports: [
     // CommonModule
    ],
    exports: [
        DoctorComponent
    ],
    providers: [
     
    ],
    bootstrap: []
  })
  export class DoctorModule { }