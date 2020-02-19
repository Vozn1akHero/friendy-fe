import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly API_URL = 'http://localhost:5000';

  constructor(private _router: Router,
              private http: HttpClient) {}

  isLoggedIn() {
    return this.http.get(`/auth/status`, {observe: 'response'});
  }

  logOut() {
    this.http.post(`/auth/logout`, null, {observe: 'response'})
      .subscribe(response => {
        if (response.status == 200){
          this._router.navigate(['/login']);
        }
    })
  }

  logIn(email: String, password: String) : Observable<any> {
    return this.http.post(`/auth/authenticate`, {
        email, password
      }, {responseType: 'json'});
  }

  joinUp(newUser) : Observable<any> {
    return this.http.post(`/auth/create`,
      newUser,
      {observe: 'response'});
  }
}
