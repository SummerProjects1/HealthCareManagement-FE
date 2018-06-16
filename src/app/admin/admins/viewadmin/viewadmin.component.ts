import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../../services/admins.service';
import { IAdmin } from '../../admins';

@Component({
  selector: 'app-viewadmin',
  templateUrl: './viewadmin.component.html',
  styleUrls: ['./viewadmin.component.css']
})
export class ViewadminComponent implements OnInit {

 
  private admins: IAdmin[] = [];

  constructor( private _adminService: AdminService ) { }

  ngOnInit() {
    this.loadAdmins();
  }

  public loadAdmins() {
    this._adminService.getAllAdmins().subscribe(
        response => this.admins = response,)
  }
  public deleteAdmin(admin: IAdmin) {
    this._adminService.deleteAdmin(admin._id).subscribe(
      response => this.admins = this.admins.filter(lists => lists !== admin),)
    }

}
