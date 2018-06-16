import { Component, OnInit } from '@angular/core';

import { DoctorService } from '../../../services/doctors.service';
import { IDoctor } from '../../doctors';

@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrls: ['./viewdoctor.component.css']
})
export class ViewdoctorComponent implements OnInit {

  private doctors: IDoctor[] = [];

  constructor( private _doctorService: DoctorService ) { }

  ngOnInit() {
    this.loadDoctors();
  }

  public loadDoctors() {
    this._doctorService.getAllDoctors().subscribe(
        response => this.doctors = response,)
  }
  public deleteDoctor(doctor: IDoctor) {
    this._doctorService.deleteDoctor(doctor._id).subscribe(
      response => this.doctors = this.doctors.filter(lists => lists !== doctor),)
    }
}

