import { Injectable } from '@angular/core';

import { Http,Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAdmin } from '../admin/admins';

@Injectable()
export class AdminService {

  constructor(private http: Http) { }

  serverURI: string = localStorage.getItem("serverApi");
  private serverApi = this.serverURI+"/admin";

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
      /*password: admin.password,
      retypepassword: admin.retypepassword,*/
      contactNumber: admin.contactNumber,
      email: admin.email,
      //address: admin.address
     });
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .pipe(map(res => res.json()));
  }

  public uploadAdvertImages(selectedFile){
    let URI = `${this.serverApi}/uploadImages/`;
    const fd  = new FormData();
    fd.append('file', selectedFile);
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:4003/upload', fd, options); 
  }
  public getAdvertsImages(){
    return this.http.get('http://localhost:3001/image/3a0056679c8480802f7f00e217761ef8.jpg', {
      responseType: ResponseContentType.Blob
    }); 
  }

  public editAdmin(admin) {
    console.log('id'+ admin._id);
    console.log('console '+ admin);
    let URI = `${this.serverApi}/editAdmin/${admin._id}`;
    let headers = new Headers;
    let body = JSON.stringify({
      firstName: admin.firstName,
      lastName: admin.lastName,
      username: admin.username,
      /*password: admin.password,
      retypepassword: admin.retypepassword,*/
      contactNumber: admin.contactNumber,
      email: admin.email,
      //address: admin.address
     });
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.put(URI, body ,{headers: headers}).pipe(map(res => res.json()));
  }
  
}  
