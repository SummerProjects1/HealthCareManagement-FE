import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http: Http) { }

  savePrescriptionDetails(prescriptionDetails){
    console.log('added prescription');

  }
}
