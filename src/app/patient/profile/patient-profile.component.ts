import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patients.service';
import { IPatients } from '../../models/patients';
import { UtilityService } from '../../services/utility.service';

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
  selectedImage: File = null;
  profilePicOriginalName: string;
  profilePicName: string;

  constructor(private _patientService: PatientService, private _utilityService: UtilityService) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem("userEmail");
    console.log("user email:" +this.userEmail);
    this._patientService.getPatientDetailsByEmail(this.userEmail)
        .subscribe(data =>{
          var body = data.json();
          console.log(body);
          if(body.success){
            this.patient = body.patient;
            this.profilePicOriginalName = this.patient.patientProfilePicOriginalName;
            this.profilePicName = this.patient.patientProfilePicFileName;
          }
        });
  }

  savePatientDetails(form) {
    let patient  = {
      _id: this.patient._id,
      username: form.value.username,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      contactNumber: form.value.contactNumber,
      email: form.value.email,
      patientProfilePicOriginalName: this.profilePicOriginalName,
      patientProfilePicFileName: this.profilePicName
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

  onFileSelected(event){
    this.selectedImage = <File> event.target.files[0];
  }

  uploadProfileImage(){
   this._utilityService.uploadProfilePic(this.selectedImage)
   .subscribe(res =>{
     var data = res.json();
     if(data.success){
        var file = data.file;
        this.profilePicOriginalName = file.originalname;
        this.profilePicName = file.filename;
     }
    console.log(this.profilePicName);
   });
  }

}
