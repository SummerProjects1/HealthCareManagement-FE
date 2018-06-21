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
  data;

  constructor(
    private prescriptionService:PrescriptionService
  ) { }

  ngOnInit() {
    this.prescriptionService. getPrescription().subscribe(data => {
      var body = data.json();
      this.prescriptions = body;
    });
  }

 

}
