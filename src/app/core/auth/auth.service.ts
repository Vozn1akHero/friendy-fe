import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _router: Router,
              private http: HttpClient) {}

  isLoggedIn() {
    return this.http.get('/api/auth/status', {observe: 'response'});
  }

  logOut() {
    this.http.post('/api/auth/logout', null, {observe: 'response'})
      .subscribe(response => {
        if (response.status == 200){
          this._router.navigate(['']);
        }
    })
  }

  logIn(email: String, password: String) : Observable<any> {
    return this.http.post('/api/auth/authenticate', {
        email, password
      }, {responseType: 'json'});
  }

  joinUp(newUser) : Observable<any> {
    return this.http.post('/api/auth/create',
      newUser,
      {observe: 'response'});
  }
}
