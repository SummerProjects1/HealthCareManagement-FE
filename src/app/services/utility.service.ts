import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions, ResponseContentType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  loginHappened: boolean = false;
  imagesManagerApi: string = localStorage.getItem("imagesManagerApi");
  
  constructor(private _http: Http) { }

  uploadProfilePic(selectedFile){
    console.log(selectedFile)
    let URI = this.imagesManagerApi+'/profilePicUpload';
    const fd  = new FormData();
    fd.append('file', selectedFile);
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this._http.post(URI, fd, options); 
  }

  loadProfilePic(picName){
    return this._http.get(this.imagesManagerApi+'/image/'+picName, {
      responseType: ResponseContentType.Blob
    }); 
  }
}
