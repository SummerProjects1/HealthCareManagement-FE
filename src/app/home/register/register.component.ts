import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';

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

  constructor( private validateService: ValidateService, private flashMessage: FlashMessagesService) { }

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
     this.flashMessage.show("Please fill in all fields", {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show("Please enter valid email", {cssClass: 'alert-danger', timeout:3000});
      return false;
    }
  }

}
