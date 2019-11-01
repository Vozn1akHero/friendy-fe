import {Injectable, OnDestroy} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private _canActive : boolean;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean>|Promise<boolean>|boolean {
    return this.authService
      .isLoggedIn()
      .pipe(
        map(response=> {
          if(response.status == 200){
            return true;
          }
          else {
            //this.router.navigate(['/login']);
            window.location.replace("/login");
            return false;
          }
        })
    )
  }
}
