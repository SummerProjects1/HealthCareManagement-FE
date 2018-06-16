import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from '../../../services/auth.service';
import { IDoctor } from '../../doctors';
import { DoctorService } from '../../../services/doctors.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {

  @Output() addDoctor: EventEmitter<IDoctor> = new EventEmitter<IDoctor>();

  private newDoctor :IDoctor;

  constructor( private _doctorService: DoctorService,
              private validateService: ValidateService,
              private flashMessage: FlashMessagesService 
            ) { }

  ngOnInit() {
     this.newDoctor = {
      _id:'',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      retypepassword: '',
      contactNumber: null,
      email: '',
      address: '',
      specialization:'',
      department:'',
      gender:'',
      dob:'',
      img: ''
  }
}

  public onSubmitDoctor() {
    this._doctorService.addDoctor(this.newDoctor).subscribe(
        response=> {
          console.log(response);
          if(response.success== true)
            this.addDoctor.emit(this.newDoctor);
            
        },
      );
     
  }


}
