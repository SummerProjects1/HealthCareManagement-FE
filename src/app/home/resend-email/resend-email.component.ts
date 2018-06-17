import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-resend-email',
  templateUrl: './resend-email.component.html',
  styleUrls: ['./resend-email.component.css']
})
export class ResendEmailComponent implements OnInit {

  email: string;
  successMessage: string;
  failMessage: string;
  description: string;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  resendEmail(){
    this._authService.resendConfirmEmail(this.email).subscribe(
    data =>{var body = data.json(); 
      if(body.success){
        if(body.code == 'ACTIVATIONLINKSENT'){
          this.successMessage = body.message ;
          this.description = 'Go Back';
        }
        if(body.code == 'USERALREADYACTIVATED'){
          this.successMessage = body.message ;
          this.description = 'Click Here to Login';
        } 
          
      }else{
        this.failMessage = body.message;
      } }, 
    error =>{//handel error
    });;
  }
  

}
