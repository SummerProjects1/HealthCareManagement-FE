import { Component, OnInit } from '@angular/core';
import { LoginGlobals } from '../globals/loginGlobal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _loginGlobals: LoginGlobals) { }

  loginHappened: string;
  logoutHappend: boolean = true;

  ngOnInit() {
    this.loginHappened = localStorage.getItem("logginHappened");
    console.log('this.loginHappened  '+this.loginHappened)
    if(this.loginHappened==='true'){
      this.logoutHappend = !this.logoutHappend;
    }
  }

  logoutClicked(){
    localStorage.setItem('logginHappened', 'false')
    this.logoutHappend =true;
    this.ngOnInit();
  }

}
