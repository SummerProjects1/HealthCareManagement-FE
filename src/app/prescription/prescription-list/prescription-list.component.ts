import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../services/prescription.service';
import { IPrescription } from '../../models/prescription';
import {IPatient} from '../../patient/patient';

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

  constructor(
    private prescriptionService:PrescriptionService
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

 

}
