import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent  implements OnInit {
  title = 'Health Care Management'; 
  loginHappened;

  ngOnInit() {
    this.loginHappened = localStorage.getItem('loginHappened');
    if(this.loginHappened ==='true'){
      localStorage.setItem('loginHappened', 'true');
    }else{
      localStorage.setItem('loginHappened', 'false');
    }
  }
}
