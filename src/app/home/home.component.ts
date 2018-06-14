import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _utilityService: UtilityService) { }

  loginHappened: boolean;
  logoutHappend: boolean = true;

  ngOnInit() {
    this.loginHappened = this._utilityService.loginHappened;
    if(this.loginHappened){
      this.logoutHappend = !this.logoutHappend;
    }
    console.log('loginHappened  '+this._utilityService.loginHappened);
  }

  logoutClicked(){
    this.loginHappened = !this.loginHappened;
    this.logoutHappend = !this.logoutHappend;
       console.log('logout clicked');
  }

}
