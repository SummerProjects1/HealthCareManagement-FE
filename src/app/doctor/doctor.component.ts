import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctors.service';
import { IDoctor } from '../models/doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  private shown: string = 'ADDPATIENT';
  userEmail: string;
  doctor: IDoctor;

  constructor(private _doctorService: DoctorService) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem("userEmail");
    console.log("user email:" +this.userEmail);
    this._doctorService.getDoctorDetailsByEmail(this.userEmail)
        .subscribe(data =>{
          var body = data.json();
          if(body.success){
            this.doctor = body.doctor;
            this.storeUserInfoinSession();
          }
        });
  }

  storeUserInfoinSession(){
    console.log(this.doctor);
    localStorage.setItem("userFName", this.doctor.firstName);
    localStorage.setItem("userLName", this.doctor.lastName);
    localStorage.setItem("email", this.doctor.email);
    localStorage.setItem("userName", this.doctor.username);

  }


}
