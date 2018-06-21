import { Component, OnInit } from '@angular/core';
import { PrescriptionService} from '../../services/prescription.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';
import {IPatient} from '../../patient/patient';


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
  selectedPatient:IPatient;
  data;


  constructor(
    private prescriptionService:PrescriptionService,
    private router:Router,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
  }
  savePrescription(frm){
    console.log('patientName'+this.patientName);
    console.log('patientName'+frm.value.patientName);
    console.log('added');
    const prescriptionDetails = {
      prescriptionDate: this.prescriptionDate,
      prescriptionTime: this.prescriptionTime,
      patientName: frm.value.patientName,
      medication: this.medication,

    }
     this.prescriptionService. savePrescriptionDetails(prescriptionDetails).subscribe(data=>{
      this.flashMessage.show("Prescription added Successfully", {cssClass: 'alert-success', timeout:1000});        
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
    console.log("selected patient: "+ this.selectedPatient);
    this.patientList=[];
  }

}
