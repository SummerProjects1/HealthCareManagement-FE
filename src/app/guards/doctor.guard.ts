import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivate {
  
  constructor(private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      console.log('doctor this._router.url'+localStorage.getItem('loginHappened'));
      if(localStorage.getItem("loginHappened") === 'true'){
        if(localStorage.getItem("loginBy") ==='doctor'){
          localStorage.setItem('currentUrl','doctor');
          return true;
        }else{
          console.log('doctort this._router.url'+this._router.url);
          this._router.navigate([localStorage.getItem('currentUrl')]);
          return false;
        }
      }else{
        localStorage.setItem('loginHappened', 'false')
        this._router.navigate(['/home']);
        return true;
      }
    
  }
}
