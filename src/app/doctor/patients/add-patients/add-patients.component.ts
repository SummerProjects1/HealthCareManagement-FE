import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IPatients } from '../../../models/patients';
import { PatientService } from '../../../services/patients.service';

/* import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages'; */

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.css']
})
export class AddPatientsComponent implements OnInit {

  @Output() addPatient: EventEmitter<IPatients> = new EventEmitter<IPatients>();

  private newPatient :IPatients;

  constructor( private _patientService: PatientService,
              /* private validateService: ValidateService,
              private flashMessage: FlashMessagesService */
            ) { }

  ngOnInit() {
     this.newPatient = {
      _id:'',
      firstName: '',
      lastName: '',
      username: '',
      dateOfBirth: '',
      gender: '',
      age: null,
      contactNumber: null,
      email: '',
      address: '',
      maritalStatus: '',
      img: '',
      bloodGroup: '',
      bloodPressure: '',
      sugger: '',
      Injury: '',
      patientProfilePicOriginalName:'',
      patientProfilePicFileName: ''
  }
}

  public onSubmit() {
    this._patientService.addPatient(this.newPatient).subscribe(
        response=> {
          console.log(response);
          if(response.success== true)
            this.addPatient.emit(this.newPatient);
            // this.flashMessage.show("Patient added successfully", {cssClass: 'alert-success', timeout:4000});
        },
      );
    }

    /* //Required fields
    if(!this.validateService.validateRegister(newPatient)){
      this.flashMessage.show("Please fill in all fields", {cssClass: 'alert-danger', timeout:4000});
       return false;
     }
 
     if(!this.validateService.validateEmail(newPatient.email)){
       this.flashMessage.show("Please enter valid email", {cssClass: 'alert-danger', timeout:4000});
       return false;
     } */

}
