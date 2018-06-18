import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../../services/utility.service';
import { HomeComponent } from '../home.component';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  navigateUrl:String;
  failMessage: String;

  constructor(
    private router:Router, 
     private _homeComponent: HomeComponent,
      private authService: AuthService,
      private flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {
  }

 onLoginSubmit(){
   const user = {
     username:this.username,
     password:this.password
   }

   this.authService.authenticateUser(user).subscribe(data =>{
     console.log(data);
     if(data.success){
       this.authService.storeUserData(data.token, data.user);
       this.flashMessage.show('You are now logged in', {
        cssClass: 'alert-success',
         timeout: 5000});
         localStorage.setItem("loginBy", 'admin');
         this._homeComponent.ngOnInit();
         this.navigateUrl = 'admin';
         this.router.navigate([this.navigateUrl]);         
     } else {
        if(data.code=='USERNOTACTIVATED'){
          this.failMessage = data.msg;
        }else{
          this.flashMessage.show(data.msg, {
            cssClass: 'alert-danger',
             timeout: 5000});
          this.router.navigate(['home']);
        }
       
     }

   });


 }
  /* loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if(username == 'admin' && password == 'admin'){
      this.router.navigate(['admin']);
      localStorage.setItem("loginHappened", 'true');
      localStorage.setItem("loginBy", 'admin');
      this._homeComponent.ngOnInit();
    }
    if(username == 'patient' && password == 'patient'){
      this.router.navigate(['patient']);
      localStorage.setItem("loginHappened", 'true');
      localStorage.setItem("loginBy", 'patient');
      this._homeComponent.ngOnInit();
    }
    if(username == 'doctor' && password == 'doctor'){
      this.router.navigate(['doctor']);
      localStorage.setItem("loginHappened", 'true');
      localStorage.setItem("loginBy", 'doctor');
      this._homeComponent.ngOnInit();
    }
  } */
}
