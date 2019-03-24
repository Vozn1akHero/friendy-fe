import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authStatus: boolean = true;
  get authStatus(){
    return this._authStatus;
  }

  constructor(private _router: Router){}

  isLoggedIn(){
    return this._authStatus;
  }

  logOut(){
    this._authStatus = false;
    this._router.navigate(['']);
  }

  logIn(){
    this._authStatus = true;
  }

  
}
