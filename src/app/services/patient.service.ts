import { IPatient } from '../patient/patient';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';


@Injectable()
export class PatientService {

  constructor(private _http: HttpClient) { }


  savePatientDetails(patient: IPatient) {
      console.log('id' + patient._id);
    console.log('console ' + patient);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.put('http://localhost:4003/patient/editPatient/' + patient._id, patient, { headers: headers});
  }

  getPatients(): Observable<IPatient[]> {
   return this._http.get<IPatient[]>('http://localhost:4003/patient/patients')
    .pipe(
      tap(patients => this.log(`fetched patients`)),
      catchError(this.handleError('getPatients', []))
    );
  }

  getPatientDetails(userName: string): Observable<IPatient> {
    return this.getPatients().pipe(
      map((patients: IPatient[]) => patients.find(p => p.userName === userName)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
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
