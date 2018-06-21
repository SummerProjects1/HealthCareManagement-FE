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

  private serverApi = "http://localhost:4003/prescription";

  savePrescriptionDetails(prescriptionDetails){
   let headers = new Headers();
   headers.append('Cntent-Type', 'application/json');
   return this.http.post('http://localhost:4003/prescription/addPrescription', prescriptionDetails, {headers: headers})

  }
  public getPrescription() {

    let URI = "http://localhost:4003/prescription/prescripts/";
    return this.http.get(URI);
}

}
