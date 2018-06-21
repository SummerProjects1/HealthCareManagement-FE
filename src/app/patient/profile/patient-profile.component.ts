import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patients.service';
import { IPatients } from '../../models/patients';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patient: IPatients;
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
    let patient  = {
      _id: this.patient._id,
      username: form.value.userName,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
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
