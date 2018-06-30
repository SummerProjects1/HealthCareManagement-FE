import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admins.service';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {

  selectedImage: File = null; 

  constructor(private _adminService: AdminService) { }

  ngOnInit() {
  }

  onFileSelected(event){
    this.selectedImage = <File> event.target.files[0];
  }

  uploadImage(){
   this._adminService.uploadAdvertImages(this.selectedImage)
   .subscribe(res =>{
    console.log(res);
   });
  }

}
