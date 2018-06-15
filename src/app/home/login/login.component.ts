import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../../services/utility.service';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,  private _homeComponent: HomeComponent) { }

  ngOnInit() {
  }

  loginUser(e){
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
  }
}
