import { AppointmentService } from '../../services/appointment.service';
import { IAppointment } from '../appointment';
import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IDoctor } from '../../admin/doctors';
import { tap, map } from 'rxjs/operators';
import { IPatients } from '../../models/patients';

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
  patientsList: IPatients[] =[];
  selectedPatient: IPatients;
  doctorName: string;
  patientName: string;
  selectedDoctor: IDoctor;
  data;
  successMessage: string;
  failMessage: string;
  appointmentResult;
  loginBy:string = localStorage.getItem("loginBy");

  constructor(private _appointmentService: AppointmentService, private _route: ActivatedRoute,
    private _router: Router) { 
      
    }
  ngOnInit() {
  }

  makeAppointment(form) {
    console.log('appointment' + this.constructAppointmentObj(form));
    this._appointmentService.makeAppointment(this.constructAppointmentObj(form))
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

  getPatientNames(){
    console.log("this.patientName :"+ this.patientName);
    if(this.patientName !==""){
       var data = this._appointmentService.getPatientNames(this.patientName)
              .subscribe(data =>{
                this.data = data;
                console.log(this.data);
                if(this.data.success){
                  this.patientsList = this.data.patient;
                  console.log(this.patientsList)
                  if(this.patientsList.length==0){
                    this.patientsList =[];
                  }
                }else{
                  this.patientsList=[];
                }
              })  
    }else{
      this.patientsList=[];
    }
  }
  getSelectedDoctor(doctor){
    this.selectedDoctor = doctor;
    this.doctorName  =doctor.firstName;
    console.log("selected doctor: "+ this.selectedDoctor);
    this.doctorsList=[];
  }
  getSelectedPatient(patient){
    this.selectedPatient = patient;
    this.patientName  =patient.firstName;
    console.log("selected doctor: "+ this.selectedPatient);
    this.patientsList=[];
  }

  constructAppointmentObj(form){
    
    if(this.loginBy ==='doctor'){
      var appointment : IAppointment = {
        _id: '',
        appointmentType: form.value.appointmentType,
        patientFName: form.value.patientName,
        appointDate: form.value.appointDate,
        appointTime: form.value.appointTime,
        appointMessage: form.value.appointMessage,
        appointStatus: form.value.appointStatus,
        patientLName: this.selectedPatient.lastName,
        patientEmail: this.selectedPatient.email,
        doctorFName : localStorage.getItem("userFName"),
        doctorLName : localStorage.getItem("userLName"),
        doctorEmail: localStorage.getItem("email")
      };
      return appointment;
    }else{
      var appointment : IAppointment = {
        _id: '',
        appointmentType: form.value.appointmentType,
        doctorFName: form.value.doctorName,
        appointDate: form.value.appointDate,
        appointTime: form.value.appointTime,
        appointMessage: form.value.appointMessage,
        appointStatus: form.value.appointStatus,
        doctorLName: this.selectedDoctor.lastName,
        doctorEmail: this.selectedDoctor.email,
        patientFName : localStorage.getItem("userFName"),
        patientLName : localStorage.getItem("userLName"),
         patientEmail: localStorage.getItem("email")
        
      };
      return appointment;
    }
  }

}
