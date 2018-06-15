import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent  implements OnInit {
  title = 'Health Care Management'; 
  loginHappened;

  constructor(private _router: Router){}

  ngOnInit() {
    this.loginHappened = localStorage.getItem('loginHappened');
    if(this.loginHappened ==='true'){
      localStorage.setItem('loginHappened', 'true');
      this._router.navigate([localStorage.getItem('currentUrl')]);
    }else{
      localStorage.setItem('loginHappened', 'false');
    }
  }
}
