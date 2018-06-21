import { IAppointment } from '../appointment/appointment';
import { AppointmentAddComponent } from '../appointment/appointment-add/appointment-add.component';
import { AppointmentService } from '../services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { PrescriptionListComponent } from '../prescription/prescription-list/prescription-list.component';
import { PatientService } from '../services/patients.service';
import { IPatient } from './patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  prescriptionTitle = 'Prescription List';
  shown: string = 'DASHBOARD';
  userEmail: string;
  patient: IPatient;
  
  constructor(private _patientService: PatientService) { }
  ngOnInit() {
    this.userEmail = localStorage.getItem("userEmail");
    console.log("user email:" +this.userEmail);
    this._patientService.getPatientDetailsByEmail(this.userEmail)
        .subscribe(data =>{
          var body = data.json();
          if(body.success){
            this.patient = body.patient;
            this.storeUserInfoinSession();
          }
        });
  }

  storeUserInfoinSession(){
    localStorage.setItem("userFName", this.patient.firstName);
    localStorage.setItem("userLName", this.patient.lastName);
    localStorage.setItem("email", this.patient.email);
    localStorage.setItem("userName", this.patient.userName);

  }

}
