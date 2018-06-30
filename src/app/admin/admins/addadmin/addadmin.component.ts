import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { Location } from '@angular/common';
import { ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
//import {Popup} from 'ng2-opd-popup';

import { IAdmin } from '../../admins';
import { AdminService } from '../../../services/admins.service';


@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  @Output() addAdmin: EventEmitter<IAdmin> = new EventEmitter<IAdmin>();
  //@ViewChild('popup1') popup1: Popup;
  @ViewChild('f') form: any;
  private newAdmin :IAdmin;

  constructor( private _adminService: AdminService,
    //private location: Location
            ) { }

  ngOnInit() {
    
     this.newAdmin = {
      _id:'',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      retypepassword: '',
      contactNumber: null,
      email: '',
      //address: ''
  }
}



  public onSubmitAdmin() {
    this._adminService.addAdmin(this.newAdmin).subscribe(
        response=> {
          console.log(response);
          if(response.success== true)
            this.addAdmin.emit(this.newAdmin);
        }
      ); 
      this.form.reset();
  }

  /*ClickButton(){

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
  }*/
  
  ClickButton(){
    alert('NEW ADMIN ADDED...!!');
  }
}
