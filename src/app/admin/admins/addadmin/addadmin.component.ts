import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from '../../../services/auth.service';
import { IAdmin } from '../../admins';
import { AdminService } from '../../../services/admins.service';


@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  @Output() addAdmin: EventEmitter<IAdmin> = new EventEmitter<IAdmin>();

  private newAdmin :IAdmin;

  constructor( private _adminService: AdminService,
              private validateService: ValidateService,
              private flashMessage: FlashMessagesService 
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
      address: '',
      img: ''
  }
}

  public onSubmitAdmin() {
    this._adminService.addAdmin(this.newAdmin).subscribe(
        response=> {
          console.log(response);
          if(response.success== true)
            this.addAdmin.emit(this.newAdmin);
            //this.flashMessage.show("Admin added successfully", {cssClass: 'alert-success', timeout:4000});
        },
      );
      /*if(!this.validateService.validateRegister(this.newAdmin)){
        this.flashMessage.show("Please fill in all fields", {cssClass: 'alert-danger', timeout:5000});
        return false;
      }
  
     if(!this.validateService.validateEmail(this.newAdmin.email)){
       this.flashMessage.show("Please enter valid email", {cssClass: 'alert-danger', timeout:4000});
       return false;
     }*/

     //Register User
    /*this.authService.registerUser(this.newAdmin).subscribe(data => {
      if(data.success){
       this.flashMessage.show("Registered new Admin ", {cssClass: 'alert-success', timeout:3000});
       this.router.navigate(['/viewAdmin']);
      } else {
       this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger', timeout:3000});
       this.router.navigate(['/addAdmin']);
      }
   });*/
  }

 

}
