import { AppointmentService } from '../../services/appointment.service';
import { IAppointment } from '../appointment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent implements OnInit {
  addAppointmentTitle = 'Make An Appointment';
  errorMessage: string;
  filteredAppointments: IAppointment[];
  appointments: IAppointment[] = [];
  constructor(private _appointmentService: AppointmentService, private _route: ActivatedRoute,
    private _router: Router) { }
  ngOnInit() {
  }

  makeAppointment(form) {
    let appointment: IAppointment = {
      _id: '',
      appointmentType: form.value.appointmentType,
      doctorName: form.value.doctorName,
      appointDate: form.value.appointDate,
      appointTime: form.value.appointTime,
      appointMessage: form.value.appointMessage,
      appointStatus: form.value.appointStatus
    };
    console.log('appointment' + appointment);
    this._appointmentService.makeAppointment(appointment)
        .subscribe(item => {
          //TODO
        });
  }
}
