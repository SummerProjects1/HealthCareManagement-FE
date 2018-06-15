import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrls: ['./viewdoctor.component.css']
})
export class ViewdoctorComponent implements OnInit {

  doctors: any[];
  constructor() {
    this.doctors = [
      {employeeId: '1', name: 'Asha', department: 'Cardiolody', specialization: 'Heart Surgeon', phone: '1234567', email: 'abc@gmail.com'},
      {employeeId: '2', name: 'Asha', department: 'Cardiolody', specialization: 'Heart Surgeon', phone: '1234567', email: 'abc@gmail.com'},
      {employeeId: '3', name: 'Asha', department: 'Cardiolody', specialization: 'Heart Surgeon', phone: '1234567', email: 'abc@gmail.com'},
      {employeeId: '4', name: 'Asha', department: 'Cardiolody', specialization: 'Heart Surgeon', phone: '1234567', email: 'abc@gmail.com'},
      {employeeId: '5', name: 'Asha', department: 'Cardiolody', specialization: 'Heart Surgeon', phone: '1234567', email: 'abc@gmail.com'}
    ];
   }

  ngOnInit() {
  }

}

