import { PatientService } from '../../services/patient.service';
import { IPatient } from '../patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patient: IPatient;
  errorMessage: any;

  constructor(private _patientService: PatientService) { }

  ngOnInit() {
     this._patientService.getPatientDetails('nagarjunakuppala')
       .subscribe( patient => this.patient = patient,
      error => this.errorMessage = <any>error);
  }

  savePatientDetails(form) {
    console.log('hello');
    console.log('ddddd' + form.value._id);
    console.log('contactNumber' + this.patient.contactNumber);
    let patient: IPatient = {
      _id: this.patient._id,
      userName: form.value.userName,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      password: form.value.password,
      address: form.value.address,
      contactNumber: form.value.contactNumber,
      email: form.value.email
    };
    this._patientService.savePatientDetails(patient)
      .subscribe(result => {
        console.log('Patient details updated successfully');
        this.ngOnInit();
      });
  }

}
