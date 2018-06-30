import { IAppointment } from '../appointment/appointment';
import { AppointmentAddComponent } from '../appointment/appointment-add/appointment-add.component';
import { AppointmentService } from '../services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { PrescriptionListComponent } from '../prescription/prescription-list/prescription-list.component';
import { PatientService } from '../services/patients.service';
import { IPatients } from '../models/patients';
import { DomSanitizer } from '@angular/platform-browser';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  prescriptionTitle = 'Prescription List';
  shown: string = 'DASHBOARD';
  userEmail: string;
  patient: IPatients;
  profilePicFileName: string;
  profilePic: any;
  
  constructor(private _patientService: PatientService, private sanitizer: DomSanitizer,
              private _utilityService: UtilityService) { }
  ngOnInit() {
    this.userEmail = localStorage.getItem("userEmail");
    console.log("user email:" +this.userEmail);
    this._patientService.getPatientDetailsByEmail(this.userEmail)
        .subscribe(data =>{
          var body = data.json();
          if(body.success){
            this.patient = body.patient;
            this.profilePicFileName = this.patient.patientProfilePicFileName
            this.storeUserInfoinSession();
            this.loadProfilePic(this.profilePicFileName);
          }
        });
  }

  loadProfilePic(profilePicname){
    this._utilityService.loadProfilePic(profilePicname)
    .toPromise()
      .then((res: any) => {
        let blob = new Blob([res._body], {
          type: res.headers.get("Content-Type")
        });

        let urlCreator = window.URL;
        this.profilePic = this.sanitizer.bypassSecurityTrustUrl(
            urlCreator.createObjectURL(blob));
      });
  }

  storeUserInfoinSession(){
    localStorage.setItem("userFName", this.patient.firstName);
    localStorage.setItem("userLName", this.patient.lastName);
    localStorage.setItem("email", this.patient.email);
    localStorage.setItem("userName", this.patient.username);

  }

}
