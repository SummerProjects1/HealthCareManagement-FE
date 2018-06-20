import { IAppointment } from '../appointment/appointment';
import { AppointmentAddComponent } from '../appointment/appointment-add/appointment-add.component';
import { AppointmentService } from '../services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { PrescriptionListComponent } from '../prescription/prescription-list/prescription-list.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  prescriptionTitle = 'Prescription List';
  shown: string = 'DASHBOARD';
  togglePrescriptionList:boolean;
  
  constructor() { }
  ngOnInit() {
  }

  showPrescriptionForm(){
    this.togglePrescriptionList = !this.togglePrescriptionList;
  }
}
