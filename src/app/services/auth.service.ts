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
  serverApi: string = localStorage.getItem("serverApi");
  usersURI = this.serverApi+'/users';

  backEndLoggedIn =  localStorage.getItem("backEndLoggedIn");
  loginTempToken = localStorage.getItem("loginTempToken");

  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Cntent-Type', 'application/json');
    return this.http.post(this.usersURI+'/register', user, {headers: headers})
     .pipe(map(res => res.json()));
  }
  
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Cntent-Type', 'application/json');
    return this.http.post(this.usersURI+'/authenticate', user, {headers: headers})
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
     return this.http.put(this.usersURI+'/activate/'+token, {headers: headers});
    //.subscribe((data) => {var body = data.json();  });
   }

   resendConfirmEmail(email: string){
    let headers = new Headers();
    let email_json ={"email":email};
    headers.append('Content-Type', 'application/json');
     return this.http.put(this.usersURI+'/resendLink/', email_json, {headers: headers});
   }

   forgotPwdEmail(email: string){
    let headers = new Headers();
    let email_json ={"email":email};
    console.log(email_json);
    headers.append('Content-Type', 'application/json');
     return this.http.put(this.usersURI+'/forgotPwd/', email_json, {headers: headers});
   }

   resetPassword(password: string, token: string){
    let headers = new Headers();
    let _json ={"password":password,"token":token};
    console.log(_json);
    headers.append('Content-Type', 'application/json');
     return this.http.put(this.usersURI+'/resetPwd/', _json, {headers: headers});
   }

   logoutWork(){
    let headers = new Headers();
   var user = JSON.parse(localStorage.getItem('user'));
   console.log(user.username)
   let _json ={userName: user.username, "backEndLoggedIn": this.backEndLoggedIn,"loginTempToken":this.loginTempToken};
    headers.append('Content-Type', 'application/json');
     return this.http.put(this.usersURI+'/logout/', _json, {headers: headers});
   }

  /* logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  } */

}
