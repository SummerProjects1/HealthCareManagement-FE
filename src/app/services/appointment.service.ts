import { IAppointment } from '../appointment/appointment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { IDoctor } from '../admin/doctors';

@Injectable()
export class AppointmentService {

  serverURI: string = localStorage.getItem("serverApi");
  private appointmentApi = this.serverURI+"/appointment";
  private doctorApi = this.serverURI+"/doctor";

  constructor(private _http: HttpClient) { }

  getAppointments(): Observable<IAppointment[]> {
    return this._http.get<IAppointment[]>(this.appointmentApi+'/appointments')
    .pipe(
      tap(appointments => this.log(`fetched Appointments`)),
      catchError(this.handleError('getAppointments', []))
    );
  }

  makeAppointment(appointment: IAppointment) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post(this.appointmentApi+'/addAppointment', appointment, { headers: headers});
  }

  editAppointment(appointment) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.put(this.appointmentApi+'/editAppointment/' + appointment._id, appointment, { headers: headers});
  }
  
  removeAppointment(id) {
    return this._http.delete(this.appointmentApi+'/deleteAppointment/' + id );
  }
  getDoctorNames(doctorName):Observable<any>{
    return this._http.get(this.doctorApi+"/getDoctorNames/"+doctorName);
  }

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);
    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

  private log(message: string) {
    console.log('AppointmentService: ' + message);
  }

}
