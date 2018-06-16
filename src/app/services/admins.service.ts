import { Injectable } from '@angular/core';

import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAdmin } from '../admin/admins';

@Injectable()
export class AdminService
{
  constructor(private http: Http) { }

  private serverApi = "http://localhost:4003/admin";

  public getAllAdmins():Observable<IAdmin[]> {

    let URI = `${this.serverApi}/getAdmin/`;
    return this.http.get(URI)
        .pipe(map(res => res.json()))
        .pipe(map(res => <IAdmin[]>res.admins));
}

  public deleteAdmin(AdminId : string) {
    let URI = `${this.serverApi}/deleteAdmin/${AdminId}`;
      let headers = new Headers;
      headers.append('Content-Type', 'application/json');
      return this.http.delete(URI, {headers})
      .pipe(map(res => res.json()));
  }

  public addAdmin(admin: IAdmin) {
    let URI = `${this.serverApi}/addAdmin/`;
    let headers = new Headers;
     let body = JSON.stringify({
      firstName: admin.firstName,
      lastName: admin.lastName,
      username: admin.username,
      password: admin.password,
      retypepassword: admin.retypepassword,
      contactNumber: admin.contactNumber,
      email: admin.email,
      address: admin.address,
      img: admin.img,
     });
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .pipe(map(res => res.json()));
  }
}  