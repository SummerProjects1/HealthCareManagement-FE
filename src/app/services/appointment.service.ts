import { IAppointment } from '../appointment/appointment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable()
export class AppointmentService {

  private _appointmentsUrl = 'http://localhost:4003/appointment/appointments';

  constructor(private _http: HttpClient) { }

  getAppointments(): Observable<IAppointment[]> {
    return this._http.get<IAppointment[]>(this._appointmentsUrl)
    .pipe(
      tap(appointments => this.log(`fetched Appointments`)),
      catchError(this.handleError('getAppointments', []))
    );
  }

  makeAppointment(appointment: IAppointment) {
     console.log('appointment' + appointment);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:4003/appointment/addAppointment', appointment, { headers: headers});
  }

  editAppointment(appointment) {
    console.log('id'+ appointment._id);
    console.log('console '+ appointment);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.put('http://localhost:4003/appointment/editAppointment/' + appointment._id, appointment, { headers: headers});
  }
  
   removeAppointment(id) {
    return this._http.delete('http://localhost:4003/appointment/deleteAppointment/' + id );
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
