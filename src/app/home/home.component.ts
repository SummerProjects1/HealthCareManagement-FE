import { Component, OnInit } from '@angular/core';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private flashMessage: FlashMessagesService,
              private _authService: AuthService) { }

  loginHappened: string;
  logoutHappend: boolean = true;


  ngOnInit() {
    this.loginHappened = localStorage.getItem("loginHappened");
    if(this.loginHappened==='true'){
      this.logoutHappend = !this.logoutHappend;
      localStorage.setItem("logoutHappened", 'false');
    }
  }

  logoutClicked(){
    localStorage.setItem('loginHappened', 'false')
    localStorage.setItem("logoutHappened", 'true');
    this.logoutHappend =true;
    this.ngOnInit();
    this.flashMessage.show('You are logged out', { cssClass:'alert-success'});
    this._authService.logoutWork().subscribe(data =>{
      console.log(data)
    });
  }

}
