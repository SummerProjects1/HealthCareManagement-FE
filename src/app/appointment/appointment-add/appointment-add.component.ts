import { AppointmentService } from '../../services/appointment.service';
import { IAppointment } from '../appointment';
import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IDoctor } from '../../admin/doctors';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent implements OnInit {
  addAppointmentTitle = 'Make An Appointment';
  errorMessage: string;
  filteredAppointments: IAppointment[];
  appointments: IAppointment[] = [];
  doctorsList: IDoctor[] =[];
  doctorName: string;
  selectedDoctor: IDoctor;
  data;
  successMessage: string;
  failMessage: string;
  appointmentResult;

  constructor(private _appointmentService: AppointmentService, private _route: ActivatedRoute,
    private _router: Router) { 
      
    }
  ngOnInit() {
  }

  makeAppointment(form) {
    let appointment: IAppointment = {
      _id: '',
      appointmentType: form.value.appointmentType,
      doctorFName: form.value.doctorName,
      appointDate: form.value.appointDate,
      appointTime: form.value.appointTime,
      appointMessage: form.value.appointMessage,
      appointStatus: form.value.appointStatus,
      doctorLName: this.selectedDoctor.lastName,
      doctorEmail: this.selectedDoctor.email,
      patientFName: localStorage.getItem("userFName"),
      patientLName: localStorage.getItem("userLName"),
      patientEmail: localStorage.getItem("email")
    };
    console.log('appointment' + appointment);
    this._appointmentService.makeAppointment(appointment)
        .subscribe(data => { 
          this.appointmentResult = data;
          if(this.appointmentResult.success){
            this.successMessage = this.appointmentResult.msg;
          }else{
            this.failMessage = this.appointmentResult.msg;
          }
        });
  }
  getDoctorNames(){
    console.log("this.doctorname :"+ this.doctorName);
    if(this.doctorName !==""){
       var data = this._appointmentService.getDoctorNames(this.doctorName)
              .subscribe(data =>{
                this.data = data;
                if(this.data.success){
                  this.doctorsList = this.data.doctors;
                  console.log(this.doctorsList)
                  if(this.doctorsList.length==0){
                    this.doctorsList =[];
                  }
                }else{
                  this.doctorsList=[];
                }
              })  
    }else{
      this.doctorsList=[];
    }
  }
  getSelectedDoctor(doctor){
    this.selectedDoctor = doctor;
    this.doctorName  =doctor.firstName;
    console.log("selected doctor: "+ this.selectedDoctor);
    this.doctorsList=[];
  }

}
