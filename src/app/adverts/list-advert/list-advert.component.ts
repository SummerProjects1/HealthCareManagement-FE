import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admins.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-advert',
  templateUrl: './list-advert.component.html',
  styleUrls: ['./list-advert.component.css']
})
export class ListAdvertComponent implements OnInit {

  imageData: any;

  constructor(private _adminService: AdminService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getAdvertsImages();
  }

  getAdvertsImages(){
    this._adminService.getAdvertsImages()
    .toPromise()
      .then((res: any) => {
        let blob = new Blob([res._body], {
          type: res.headers.get("Content-Type")
        });

        let urlCreator = window.URL;
        this.imageData = this.sanitizer.bypassSecurityTrustUrl(
            urlCreator.createObjectURL(blob));
      });

  }
}
