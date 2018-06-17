import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {

  reset_password: string = 'Reset Password';

  constructor(private _authService: AuthService, private _router: ActivatedRoute,
    private flashMessage: FlashMessagesService, private _route: Router) { }

  ngOnInit() {
  }

  resetPassword(form){
    var password = form.value.password;
    var token = this._router.snapshot.params['token'];
    this._authService.resetPassword(password, token ).subscribe(
    data =>{var body = data.json(); 
        console.log(body);
      if(body.success){
        this.flashMessage.show("Success:  "+body.message, {cssClass: 'alert-success', timeout:10000});
        this._route.navigate(['/home']);          
      }else{
        this.flashMessage.show("Something went wrong: "+body.message, {cssClass: 'alert-danger', timeout:10000});;
      } }, 
    error =>{//handel error
    });;
  }

}
