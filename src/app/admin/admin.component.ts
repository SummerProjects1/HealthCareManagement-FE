import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private shown: string = 'VIEWDOCTOR';
  username = 'Asha Singh';
  role = 'Admin';

  constructor(private _homeComponent: HomeComponent) { }

  ngOnInit() {
  }

  logoutClicked(){
    localStorage.setItem('loginHappened', 'false')
    localStorage.setItem("logoutHappened", 'true');
    this._homeComponent.ngOnInit();
  }
}
