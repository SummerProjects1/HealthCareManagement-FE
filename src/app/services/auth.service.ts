import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { map} from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

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

   confirmEmail(token: string){
    let headers = new Headers();
    let result:string;
    headers.append('Content-Type', 'application/json');
     return this.http.put('http://localhost:4003/users/activate/'+token, {headers: headers});
    //.subscribe((data) => {var body = data.json();  });
   }

   resendConfirmEmail(email: string){
    let headers = new Headers();
    let email_json ={"email":email};
    headers.append('Content-Type', 'application/json');
     return this.http.put('http://localhost:4003/users/resendLink/', email_json, {headers: headers});
   }

   forgotPwdEmail(email: string){
    let headers = new Headers();
    let email_json ={"email":email};
    console.log(email_json);
    headers.append('Content-Type', 'application/json');
     return this.http.put('http://localhost:4003/users/forgotPwd/', email_json, {headers: headers});
   }

   resetPassword(password: string, token: string){
    let headers = new Headers();
    let _json ={"password":password,"token":token};
    console.log(_json);
    headers.append('Content-Type', 'application/json');
     return this.http.put('http://localhost:4003/users/resetPwd/', _json, {headers: headers});
   }

  /* logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  } */

}
