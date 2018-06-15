import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private shown: string = 'VIEWDOCTOR';
  username = 'Asha Singh';
  role = 'Admin';

  constructor() { }

  ngOnInit() {
  }

  /*toggleAddAdminForm: boolean;
  toggleViewAdminForm: boolean = true;
  toggleViewDoctorForm: boolean = true;
  toggleAddDoctorForm: boolean = true;
  toggleAddProfileForm: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showAddAdminForm() {
    this.toggleAddAdminForm = !this.toggleAddAdminForm;
  }
  showViewAdminForm() {
    this.toggleViewAdminForm = !this.toggleViewAdminForm;
  }
  showViewDoctorForm() {
    this.toggleViewDoctorForm = !this.toggleViewDoctorForm;
  }
  showAddDoctorForm() {
    this.toggleAddDoctorForm = !this.toggleAddDoctorForm;
  }
  showAddProfileForm() {
    this.toggleAddProfileForm = !this.toggleAddProfileForm;
  }*/

}
