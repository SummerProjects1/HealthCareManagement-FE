import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-forgotpassword',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    private email:string;
    private successMessage: string;
    private description: string;
    private failMessage: string;

    constructor(private _authService: AuthService) { }

    ngOnInit() {
    }

    forgotPwdEmail(form){
        this.email = form.value.email;
        this._authService.forgotPwdEmail(this.email).subscribe(
        data =>{var body = data.json(); 
            console.log(body);
          if(body.success){
            if(body.code == 'ACTIVATIONLINKSENT'){
              this.successMessage = body.message ;
              this.description = 'Go Back';
            }              
          }else{
            this.failMessage = body.message;
          } }, 
        error =>{//handel error
        });;
      }
  

}
