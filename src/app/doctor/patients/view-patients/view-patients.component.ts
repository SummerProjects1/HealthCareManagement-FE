import { Component, OnInit } from '@angular/core';

import { PatientService } from '../../../services/patients.service';
import { IPatients } from '../../../models/patients';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {
 
  //patients property which is an array of IPatient type
  private patients: IPatients[] = [];

  constructor( private _patientService: PatientService ) { }

  ngOnInit() {

    //Load all patients on init
    this.loadPatients();
  }

  public loadPatients() {

    //Get all patients from server and update the patients property
    this._patientService.getAllPatients().subscribe(
        response => this.patients = response,)
  }

  //deleteList. The deleted list is being filtered out using the .filter method
  public deletePatient(patient: IPatients) {
    this._patientService.deletePatient(patient._id).subscribe(
      response => this.patients = this.patients.filter(lists => lists !== patient),)
    }
}
