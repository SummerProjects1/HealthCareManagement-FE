import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModule, ViewChild } from '@angular/core';

import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import {Popup} from 'ng2-opd-popup';
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
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('f') form: any;
  private newDoctor :IDoctor;

  constructor( private _doctorService: DoctorService,
 
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
      this.form.reset();
  }

  ClickButton(){

    this.popup1.options = {
      header: "Admin",
      color: "teal", // red, blue....
      widthProsentage: 40, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: true, // You can hide this in case you want to use custom buttons
      confirmBtnContent: "OK", // The text on your confirm button
      cancleBtnContent: "OK", // the text on your cancel button
      confirmBtnClass: "btn btn-default hidden", // your class for styling the confirm button
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
    };
    this.popup1.show(this.popup1.options);
  }


}
