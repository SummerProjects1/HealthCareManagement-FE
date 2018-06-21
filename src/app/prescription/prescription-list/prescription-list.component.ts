import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../services/prescription.service';
import { IPrescription } from '../../models/prescription';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {
 
  private prescriptions: IPrescription[] = [];

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
