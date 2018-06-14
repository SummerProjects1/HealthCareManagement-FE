import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  toggleAddPtientsForm: boolean;
  toggleViewPatientsForm: boolean;
  toggleViewAppointmentForm: boolean;
  toggleAddAppointmentForm: boolean;

  constructor() { }

  ngOnInit() {
  }

  showAddPatientsForm() {
    this.toggleAddPtientsForm = !this.toggleAddPtientsForm;
  }
  showViewPatientsForm() {
    this.toggleViewPatientsForm = !this.toggleViewPatientsForm;
  }
  showViewAppointmentForm() {
    this.toggleViewAppointmentForm = !this.toggleViewAppointmentForm;
  }
  showAddAppointmentForm() {
    this.toggleAddAppointmentForm = !this.toggleAddAppointmentForm;
  }

}
