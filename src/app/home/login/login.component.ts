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

  constructor(private router:Router, private _utilityService: UtilityService,
              private _homeComponent: HomeComponent) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    
    
    if(username == 'admin' && password == 'admin'){
      this.router.navigate(['admin']);
      this.loginHappened();
    }
    if(username == 'patient' && password == 'patient'){
      this.router.navigate(['patient']);
      this.loginHappened();
    }
    if(username == 'doctor' && password == 'doctor'){
      this.router.navigate(['doctor']);
      this.loginHappened();
    }
  }
  loginHappened(){
    this._utilityService.loginHappened=true;
    this._homeComponent.ngOnInit();
  }
}
