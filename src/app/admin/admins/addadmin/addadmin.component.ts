import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  username:String;
  firstname:String;
  lastname:String;
  email:String;
  password:String;
  retypepassword:String;
  contact:String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  onAddAdmin(){
    const admin = {
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      retypepassword: this.retypepassword,
      contact: this.contact

    }

    if(!this.validateService.validateRegister(admin)){
      this.flashMessage.show("Please fill in all fields", {cssClass: 'alert-danger', timeout:5000});
       return false;
     }
  
     if(!this.validateService.validateEmail(admin.email)){
       this.flashMessage.show("Please enter valid email", {cssClass: 'alert-danger', timeout:4000});
       return false;
     }

     //Register User
    this.authService. registerUser(admin).subscribe(data => {
      if(data.success){
       this.flashMessage.show("Registered new Admin ", {cssClass: 'alert-success', timeout:3000});
       this.router.navigate(['/viewAdmin']);
      } else {
       this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger', timeout:3000});
       this.router.navigate(['/addAdmin']);
      }
   });
  }

 

}
