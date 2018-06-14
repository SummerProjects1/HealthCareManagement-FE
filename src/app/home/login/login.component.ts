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
      localStorage.setItem("logginHappened", 'true');
    }
    if(username == 'patient' && password == 'patient'){
      this.router.navigate(['patient']);
      localStorage.setItem("logginHappened", 'true');
      this._homeComponent.ngOnInit();
    }
    if(username == 'doctor' && password == 'doctor'){
      this.router.navigate(['doctor']);
      localStorage.setItem("logginHappened", 'true');
      this._homeComponent.ngOnInit();
    }
  }
}
