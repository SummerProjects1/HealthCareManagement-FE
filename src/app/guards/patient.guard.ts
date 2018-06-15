import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientGuard implements CanActivate {
  
  constructor(private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      console.log('localStorage.getItem(loginBy)'+ localStorage.getItem('loginBy'));
      if(localStorage.getItem('loginHappened') === 'true'){
        if(localStorage.getItem('loginBy') === 'patient'){
          localStorage.setItem('currentUrl','patient');
          return true;
        }else{
          console.log('patient this._router.url'+this._router.url);
          this._router.navigate([localStorage.getItem('currentUrl')]);
          return false
        }  
      }else{
        localStorage.setItem('loginHappened', 'false')
        this._router.navigate(['/home']);
        return false
      }
  }
}
