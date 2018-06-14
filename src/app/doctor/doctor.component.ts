import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  toggleAddPtientsForm: boolean;
  toggleViewPatientsForm: boolean = true;
  toggleViewAppointmentsForm: boolean = true;
  toggleAddAppointmentsForm: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showAddPatientsForm() {
    this.toggleAddPtientsForm = !this.toggleAddPtientsForm;
  }
  showViewPatientsForm() {
    this.toggleViewPatientsForm = !this.toggleViewPatientsForm;
  }
  showViewAppointmentsForm() {
    this.toggleViewAppointmentsForm = !this.toggleViewAppointmentsForm;
  }
  showAddAppointmentsForm() {
    this.toggleAddAppointmentsForm = !this.toggleAddAppointmentsForm;
  }

}
