import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPrescription } from '../models/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http: Http) { }

  serverURI: string = localStorage.getItem("serverApi");
  private serverApi = this.serverURI+"/prescription";

  savePrescriptionDetails(prescriptionDetails){
   let headers = new Headers();
   headers.append('Cntent-Type', 'application/json');
   return this.http.post(this.serverApi+'/addPrescription', prescriptionDetails, {headers: headers})

  }
  public getPrescription() {

    let URI = this.serverApi+"/prescripts/";
    return this.http.get(URI);
}
getPatientNames(patientName):Observable<any>{
  return this.http.get("http://localhost:4003/patient/getPatientNames/"+patientName);
}

}
