import { Component, OnInit } from '@angular/core';
import { PrescriptionService} from '../../services/prescription.service';
import { Router } from '@angular/router';


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

  constructor(
    private prescriptionService:PrescriptionService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  savePrescription(){
    console.log('added');
    const prescriptionDetails = {
      prescriptionDate: this.prescriptionDate,
      prescriptionTime: this.prescriptionTime,
      selectPatient: this.selectPatient,
      medication: this.medication

    }

   

    /* this.prescriptionService. savePrescriptionDetails(prescriptionDetails) {
      console.log('added prescription');
    } */
  }

}
