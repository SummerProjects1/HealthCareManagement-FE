import { Component, OnInit } from '@angular/core';
import { PrescriptionService} from '../../services/prescription.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';
import {IPatient} from '../../patient/patient';
import { IPatients } from '../../models/patients';


@Component({
  selector: 'app-prescription-add',
  templateUrl: './prescription-add.component.html',
  styleUrls: ['./prescription-add.component.css']
})
export class PrescriptionAddComponent implements OnInit {
  prescriptionDate: String;
  prescriptionTime: String;
  selectPatient: String;
  medication: String;
  patientList: IPatient[] =[];
  patientName: String;
  patient: IPatient;
  selectedPatient:IPatients;
  data;
  successMessage: String;
  failMessage: String;


  constructor(
    private prescriptionService:PrescriptionService,
    private router:Router,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
  }
  savePrescription(frm){
    const prescriptionDetails = {
      prescriptionDate: this.prescriptionDate,
      prescriptionTime: this.prescriptionTime,
      patientFName: frm.value.patientName,
      medication: this.medication,
      patientLName: this.selectedPatient.lastName,
      patientEmail: this.selectedPatient.email,
      patientAge: this.selectedPatient.age,
      patientGender: this.selectedPatient.gender,
      doctorFName: localStorage.getItem("userFName"),
      doctorLName: localStorage.getItem("userLName"),
      doctorEmail: localStorage.getItem("email")

    }
     this.prescriptionService. savePrescriptionDetails(prescriptionDetails)
     .subscribe(data=>{
        var dataJson = data.json();
        if(dataJson.success){
         //this.successMessage = dataJson.msg;
          this.flashMessage.show("Prescription added Successfully", {cssClass: 'alert-success', timeout:1000});  
        }else{
          this.failMessage = dataJson.msg;
        }       
     })  
  }

  getPatientNames(){
    if(this.patientName !==""){
       var data = this.prescriptionService.getPatientNames(this.patientName)
              .subscribe(data =>{
                this.data = data;
                var dataJson = this.data.json();
                if(dataJson.success){
                  this.patientList = dataJson.patient;
                  if(this.patientList.length==0){
                    this.patientList =[];
                  }
                }else{
                  this.patientList=[];
                }
              })  
    }else{
      this.patientList=[];
    }
  }
  getSelectedPatient(patient){
    this.selectedPatient = patient;
    this.patientName  =patient.firstName;
    this.patientList=[];
  }

}
