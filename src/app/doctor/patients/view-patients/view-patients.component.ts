import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {

  patients: any[];

  constructor() {
    this.patients = [
      {patientId: '1', name: 'chaitra', email: 'abc@gmail.com', phone: '1234567', address: 'Houston', gender: 'Female', dob: '22 July 1991', age: '26', bloodGroup: 'A+', status: 'Operation'},
      {patientId: '1', name: 'chaitra', email: 'abc@gmail.com', phone: '1234567', address: 'Houston', gender: 'Female', dob: '22 July 1991', age: '26', bloodGroup: 'A+', status: 'Operation'},
      {patientId: '1', name: 'chaitra', email: 'abc@gmail.com', phone: '1234567', address: 'Houston', gender: 'Female', dob: '22 July 1991', age: '26', bloodGroup: 'A+', status: 'Operation'},
      {patientId: '1', name: 'chaitra', email: 'abc@gmail.com', phone: '1234567', address: 'Houston', gender: 'Female', dob: '22 July 1991', age: '26', bloodGroup: 'A+', status: 'Operation'},
      {patientId: '1', name: 'chaitra', email: 'abc@gmail.com', phone: '1234567', address: 'Houston', gender: 'Female', dob: '22 July 1991', age: '26', bloodGroup: 'A+', status: 'Operation'}
    ];
   }

  ngOnInit() {
  }

}
