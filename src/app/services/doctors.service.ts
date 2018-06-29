import { Injectable } from '@angular/core';

import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDoctor } from '../admin/doctors';

@Injectable()
export class DoctorService
{
  constructor(private http: Http) { }

  serverURI: string = localStorage.getItem("serverApi");
  private serverApi = this.serverURI+"/doctor";

  public getAllDoctors():Observable<IDoctor[]> {

    let URI = `${this.serverApi}/getDoctor/`;
    return this.http.get(URI)
        .pipe(map(res => res.json()))
        .pipe(map(res => <IDoctor[]>res.doctors));
}

  public deleteDoctor(DoctorsId : string) {
    let URI = `${this.serverApi}/deleteDoctor/${DoctorsId}`;
      let headers = new Headers;
      headers.append('Content-Type', 'application/json');
      return this.http.delete(URI, {headers})
      .pipe(map(res => res.json()));
  }

  public addDoctor(doctor: IDoctor) {
    let URI = `${this.serverApi}/addDoctor/`;
    let headers = new Headers;
     let body = JSON.stringify({
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      username: doctor.username,
      /*password: doctor.password,
      retypepassword: doctor.retypepassword,*/
      contactNumber: doctor.contactNumber,
      email: doctor.email,
      address: doctor.address,
      specialization:doctor.specialization,
      department:doctor.department,
      gender:doctor.gender,
      dob:doctor.dob,
     });
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .pipe(map(res => res.json()));
  }
  getDoctorDetailsByEmail(email) {
    return this.http.get(this.serverApi+'/doctorDetails/'+email);
  
  }

  public editDoctor(doctor) {
    console.log('id'+ doctor._id);
    console.log('console '+ doctor);
    let URI = `${this.serverApi}/editDoctor/${doctor._id}`;
    let headers = new Headers;
    let body = JSON.stringify({
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      username: doctor.username,
      /*password: doctor.password,
      retypepassword: doctor.retypepassword,*/
      contactNumber: doctor.contactNumber,
      email: doctor.email,
      address: doctor.address,
      specialization:doctor.specialization,
      department:doctor.department,
      gender:doctor.gender,
      dob:doctor.dob,
     });
    headers.append('Content-Type', 'application/json');
    return this.http.put(URI, body ,{headers: headers}).pipe(map(res => res.json()));
  }
}  