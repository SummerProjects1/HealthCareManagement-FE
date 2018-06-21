import { AppointmentService } from '../../services/appointment.service';
import { IAppointment } from '../appointment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointmentTitle = 'Appointment List';
  errorMessage: string;
  filteredAppointments: IAppointment[];
  appointments: IAppointment[] = [];
  toggleEditForm = false;
  selectedAppointment: IAppointment;
  user: string;
  userEmail: string;

  constructor(private _appointmentService: AppointmentService) { }

  ngOnInit() {

    this.userEmail = localStorage.getItem("userEmail");
    this.user = localStorage.getItem('loginBy');

    this._appointmentService.getAppointmentDetailsByEmail(this.userEmail)
          .subscribe(appointments => { this.appointments = appointments,
             this.filteredAppointments = this.appointments;
       }, error => this.errorMessage = <any>error);
  }

  editAppointment(form) {
    console.log('hello');
    console.log('ddddd' + form.value._id);
    console.log('appointMessage' + this.selectedAppointment.appointMessage);
    
    let appointment = {
      _id: this.selectedAppointment._id,
      appointmentType: form.value.appointmentType,
      doctorFName: form.value.doctorName,
      appointDate: form.value.appointDate,
      appointTime: form.value.appointTime,
      appointMessage: form.value.appointMessage,
      appointStatus: form.value.appointStatus
    };
    this._appointmentService.editAppointment(appointment)
          .subscribe( result => {
          console.log('updated successfully');
          this.ngOnInit();
        });
    this.toggleEditForm = !this.toggleEditForm;
  }

  removeAppointment(id) {
    this._appointmentService.removeAppointment(id)
        .subscribe(data => {
           for ( let i = 0; i < this.filteredAppointments.length; i++) {
              if ( id === this.filteredAppointments[i]._id) {
                this.filteredAppointments.splice(i, 1);
              }
           }
          });
  }

  showEditForm(appointment) {
    this.selectedAppointment = appointment;
    this.toggleEditForm = !this.toggleEditForm;
  }

}
