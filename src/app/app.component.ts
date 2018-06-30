import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent  implements OnInit {
  title = 'Health Care Management'; 
  loginHappened;
  serverApi: string;
  imagesManagerApi: string;

  constructor(private _router: Router){}

  ngOnInit() {
    this.serverApi= "http://localhost:4003";
    this.imagesManagerApi= "http://localhost:4002";
    localStorage.setItem("serverApi", this.serverApi);
    localStorage.setItem("imagesManagerApi", this.imagesManagerApi);
    this.loginHappened = localStorage.getItem('loginHappened');
    if(this.loginHappened ==='true'){
      localStorage.setItem('loginHappened', 'true');
      this._router.navigate([localStorage.getItem('currentUrl')]);
    }else{
      localStorage.setItem('loginHappened', 'false');
    }
  }
}
