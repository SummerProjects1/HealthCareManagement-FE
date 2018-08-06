import { Injectable } from '@angular/core';

import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPatients } from '../models/patients';

@Injectable()
export class PatientService {
  
  constructor(private http: Http) { }

  serverURI: string = localStorage.getItem("serverApi");
  private serverApi = this.serverURI+"/patients";

  backEndLoggedIn =  localStorage.getItem("backEndLoggedIn");
  loginTempToken = localStorage.getItem("loginTempToken");

  public getAllPatients():Observable<IPatients[]> {

    let URI = `${this.serverApi}/getPatient/`;
    return this.http.get(URI)
        .pipe(map(res => res.json()))
        .pipe(map(res => <IPatients[]>res.patients));
}

getPatientDetailsByEmail(email) {
  return this.http.get(this.serverApi+'/patientDetails/'+email);

}
  public deletePatient(patientId : string) {
    let URI = `${this.serverApi}/deletePatient/${patientId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    headers.append('backEndLoggedIn', this.backEndLoggedIn);
    headers.append('loginTempToken', this.loginTempToken);
      return this.http.delete(URI, {headers})
      .pipe(map(res => res.json()));
  }

  public addPatient(patient: IPatients) {
    let URI = `${this.serverApi}/addPatient/`;
    let headers = new Headers;
     let body = JSON.stringify({
      firstName: patient.firstName,
      lastName: patient.lastName,
      username: patient.username,
      dateOfBirth: patient.dateOfBirth,
      gender: patient.gender,
      age: patient.age,
      contactNumber: patient.contactNumber,
      email: patient.email,
      address: patient.address,
      maritalStatus: patient.maritalStatus,
      img: patient.img,
      bloodGroup: patient.bloodGroup,
      bloodPressure: patient.bloodPressure,
      sugger: patient.sugger,
      Injury: patient.Injury
     });
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .pipe(map(res => res.json()));
}


savePatientDetails(patient) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    headers.append('backEndLoggedIn', this.backEndLoggedIn);
    headers.append('loginTempToken', this.loginTempToken);
    return this.http.put(this.serverApi+'/editPatient/' + patient._id, patient, { headers: headers});
}

getPatientDetails(userName: string): Observable<IPatients> {
    return this.getAllPatients().pipe(
        map((patients: IPatients[]) => patients.find(p => p.username === userName)));
}


private log(message: string) {
    console.log('AppointmentService: ' + message);
}

}  