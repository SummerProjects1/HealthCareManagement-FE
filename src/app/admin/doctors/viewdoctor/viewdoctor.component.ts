import { Component, OnInit } from '@angular/core';

import { DoctorService } from '../../../services/doctors.service';
import { IDoctor } from '../../doctors';

@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrls: ['./viewdoctor.component.css']
})
export class ViewdoctorComponent implements OnInit {

  private doctors: IDoctor[] = [];
  toggleEditForm = false;
  selectedDoctor: IDoctor;
  loginBy:string = localStorage.getItem("loginBy");

  constructor( private _doctorService: DoctorService ) { }

  ngOnInit() {
    this.loadDoctors();
  }

  public loadDoctors() {
    this._doctorService.getAllDoctors().subscribe(
        response => this.doctors = response,)
  }
  public deleteDoctor(doctor: IDoctor) {
    this._doctorService.deleteDoctor(doctor._id).subscribe(
      response => this.doctors = this.doctors.filter(lists => lists !== doctor),)
    }

    showEditForm(doctor) {
      this.selectedDoctor = doctor;
      this.toggleEditForm = !this.toggleEditForm;
    }

  /*showeditalert(){
      alert('Doctor details has been successfully edited');
    }*/
    showDoctorDetails(doctor){
      this.selectedDoctor = doctor;
    }

  editDoctor(form) {
     
      let doctor: IDoctor = {
        _id: this.selectedDoctor._id,
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        username: form.value.username,
        password: form.value.password,
        retypepassword: form.value.retypepassword,
        contactNumber: form.value.contactNumber,
        email: form.value.email,
        address: form.value.address,
        specialization:form.value.specialization,
        department:form.value.department,
        gender:form.value.gender,
        dob:form.value.dob
      };
      this._doctorService.editDoctor(doctor)
            .subscribe( result => {
              var data = result;
              if(data.success){
                this.ngOnInit();
                alert('Doctor details has been successfully edited');
              }else{
                alert("something went wrong");
              }
          });

      
      //this.toggleEditForm = !this.toggleEditForm;
    }
}

