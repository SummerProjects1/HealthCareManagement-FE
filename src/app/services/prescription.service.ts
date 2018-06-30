import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPrescription } from '../models/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  [x: string]: any;

  _prescriptionList: IPrescription[]=[];
  ID:number;

  constructor(private http: Http) { }

  serverURI: string = localStorage.getItem("serverApi");
  private serverApi = this.serverURI+"/prescription";

  savePrescriptionDetails(prescriptionDetails){
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.post(this.serverApi+'/addPrescription', prescriptionDetails, {headers: headers})

  }
  public getPrescription() {
 
    let URI = this.serverApi+"/prescripts/";
    return this.http.get(URI);
}
getPatientNames(patientName):Observable<any>{
  return this.http.get("http://localhost:4003/patients/getPatientNames/"+patientName);
}

getAppointmentDetailsByEmail(email: string) {
  return this.http.get(this.serverApi+'/prescriptListFilter/'+email);
} 

public deletePrescription(PrescriptionId : string) {
  let URI = `${this.serverApi}/deletePrescription/${PrescriptionId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, {headers})
    .pipe(map(res => res.json()));
}


public editPrescription(prescription) {
  
  console.log("In edit service....")
  let URI = `${this.serverApi}/editPrescription/${prescription._id}`;
  let headers = new Headers;
  let body = JSON.stringify({

    prescriptionDate: prescription.prescriptionDate,
    prescriptionTime: prescription.prescriptionTime,
    patientFName: prescription. patientFName,
    patientLName:prescription.patientLName,
    patientEmail:prescription.patientEmail,
    doctorFName:prescription.doctorFName,
    doctorLName:prescription. doctorLName,
    doctorEmail:prescription. doctorEmail,
    medication: prescription.medication,
  
   });
  console.log("in service.........");
  headers.append('Content-Type', 'application/json');
  return this.http.put(URI, body ,{headers: headers}).pipe(map(res => res.json()));
}

}
