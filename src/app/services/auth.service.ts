import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { map} from 'rxjs/operators';

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
}
