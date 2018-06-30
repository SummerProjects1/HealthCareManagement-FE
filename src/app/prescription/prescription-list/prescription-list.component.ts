import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../services/prescription.service';
import { IPrescription } from '../../models/prescription';
import {IPatient} from '../../patient/patient';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {
 
  private prescriptions: IPrescription[] = [];
  patientList: IPatient[] =[];
  patientName: String;
  patient: IPatient;
  selectedPatient:IPatient;
  selectedPrescription: IPrescription;
  data;
  loginBy:string = localStorage.getItem("loginBy");
  userEmail: string;
  toggleEditForm = false;

  constructor(
    private prescriptionService:PrescriptionService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem("userEmail");

    this.prescriptionService.getAppointmentDetailsByEmail(this.userEmail)
          .subscribe(data => {
              var body = data.json();
              if(body.success){
                this.prescriptions = body.prescriptions;
              }
          });
  }

  getPrescriptionDetails(prescription){
    console.log(prescription);
    this.selectedPrescription = prescription;
  }

   deletePrescription(prescription: IPrescription) {
    this.prescriptionService.deletePrescription(prescription._id).subscribe(
      response => this.prescriptions = this.prescriptions.filter(lists => lists !== prescription),)
    }
 
  showEditForm(prescription) {
    console.log("inside edit prescription form");

    this.selectedPrescription = prescription;
    this.toggleEditForm = !this.toggleEditForm;
  }

  editPrescription(form) {
    console.log("inside edit prescription");
    let prescription: IPrescription = {
      _id: this.selectedPrescription._id,
      prescriptionDate: form.value.prescriptionDate,
      prescriptionTime: form.value.prescriptionTime,
      patientFName: form.value. patientFName,
      patientLName: this.selectedPrescription.patientLName,
      patientEmail: this.selectedPrescription.patientEmail,
      patientAge: this.selectedPrescription.patientAge,
      patientGender: this.selectedPrescription.patientGender,
      doctorFName: localStorage.getItem("userFName"),
      doctorLName: localStorage.getItem("userLName"),
      doctorEmail: localStorage.getItem("email"),
      medication: form.value.medication,
    };
    this.prescriptionService.editPrescription(prescription)
          .subscribe( result => {
          console.log('updated successfully');
          this.ngOnInit();
        });
      
   alert('Prescription details has been successfully edited');
  }
}



