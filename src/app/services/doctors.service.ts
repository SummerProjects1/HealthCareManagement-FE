import { Injectable } from '@angular/core';

import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDoctor } from '../admin/doctors';

@Injectable()
export class DoctorService
{
  constructor(private http: Http) { }

  private serverApi = "http://localhost:4003/doctor";

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
      password: doctor.password,
      retypepassword: doctor.retypepassword,
      contactNumber: doctor.contactNumber,
      email: doctor.email,
      address: doctor.address,
      specialization:doctor.specialization,
      department:doctor.department,
      gender:doctor.gender,
      dob:doctor.dob,
      img: doctor.img,
     });
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .pipe(map(res => res.json()));
  }
}  