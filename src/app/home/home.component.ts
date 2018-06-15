import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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
  }

}
