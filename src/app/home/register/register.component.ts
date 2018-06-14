import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
firstname:String;
lastname:String;
username:String;
email:String;
password:String;
retypepassword:String;
contact:String;

  constructor( private validateService: ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password,
      retypepassword: this.retypepassword,
      contact: this.contact

    }

    //Required fields
    if(!this.validateService.validateRegister(user)){
      console.log("Please fill in all fields");
      return false;
    }

    if(!this.validateService.validateRegister(user.email)){
      console.log("Please enter valid email");
      return false;
    }
  }

}
