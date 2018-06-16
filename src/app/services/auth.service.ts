import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { map} from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Cntent-Type', 'application/json');
    return this.http.post('http://localhost:4003/users/register', user, {headers: headers})
     .pipe(map(res => res.json()));
  }
  
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Cntent-Type', 'application/json');
    return this.http.post('http://localhost:4003/users/authenticate', user, {headers: headers})
     .pipe(map(res => res.json()));
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem("loginHappened", 'true');
    this.authToken = token;
    this.user = user;
  }

   loggedIn(){
     return tokenNotExpired();
   }
  /* logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  } */

}
