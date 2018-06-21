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
  userEmail: string;
  successMessage: string;
  failMessage: string;
  result;

  constructor(private _patientService: PatientService) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem("userEmail");
    console.log("user email:" +this.userEmail);
    this._patientService.getPatientDetailsByEmail(this.userEmail)
        .subscribe(data =>{
          var body = data.json();
          if(body.success){
            this.patient = body.patient;
          }
        });
  }

  savePatientDetails(form) {
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
      .subscribe(data => {
        this.result = data.json();
          if(this.result.success){
            this.successMessage = this.result.msg;
          }else{
            this.failMessage = this.result.msg;
          }
      });
  }

}
