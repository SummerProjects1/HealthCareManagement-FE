import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { map, tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit  {

  token: string;
  successMessage: string;
  failMessage: string;

  constructor(private _router: ActivatedRoute, private  _authService: AuthService) { }

  ngOnInit() {
   this.token = this._router.snapshot.params['token'];
    this._authService.confirmEmail(this.token).subscribe(
    data =>{var body = data.json(); 
      if(body.success){
        this.successMessage = body.message;
      }else{
        this.failMessage = body.message;
      } }, 
    error =>{//handel error
    });
   
  }
}
