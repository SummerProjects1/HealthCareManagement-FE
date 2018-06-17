import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  constructor( 
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

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
    //if(!this.validateService.validateRegister(user)){
    // this.flashMessage.show("Please fill in all fields", {cssClass: 'alert-danger', timeout:4000});
      //return false;
   // }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show("Please enter valid email", {cssClass: 'alert-danger', timeout:4000});
      return false;
    }

   //Register User
    this.authService. registerUser(user).subscribe(data => {
      console.log(data);
       if(data.success){
        this.flashMessage.show("Success:  "+data.msg, {cssClass: 'alert-success', timeout:10000});
        this.router.navigate(['/home']);
       } else {
        this.flashMessage.show("Something went wrong: "+data.msg, {cssClass: 'alert-danger', timeout:10000});
        //this.router.navigate(['/register']);
       }
    });

  }

}
