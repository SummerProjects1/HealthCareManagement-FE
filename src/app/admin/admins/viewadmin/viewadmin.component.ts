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
  toggleEditForm = false;
  selectedAdmin: IAdmin;

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

  showEditForm(admin) {
      this.selectedAdmin = admin;
      this.toggleEditForm = !this.toggleEditForm;
    }

  /*showeditalert(){
      alert('Admin details has been successfully edited');
  }*/

  editAdmin(form) {
      console.log('hello');
      console.log('ddddd' + form.value._id);
      
      let admin: IAdmin = {
        _id: this.selectedAdmin._id,
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        username: form.value.username,
        password: form.value.password,
        retypepassword: form.value.retypepassword,
        contactNumber: form.value.contactNumber,
        email: form.value.email,
        //address: form.value.address,
      };
      this._adminService.editAdmin(admin)
            .subscribe( result => {
            console.log('updated successfully');
            this.ngOnInit();
          });

      alert('Admin details has been successfully edited');
      //this.toggleEditForm = !this.toggleEditForm;
    }

}
