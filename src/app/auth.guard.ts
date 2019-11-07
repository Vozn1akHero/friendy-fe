import {Injectable, OnDestroy} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import {Observable, of, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean>|Promise<boolean>|boolean {
    return this.authService
      .isLoggedIn()
      .pipe(
        map(response=> {
          if(response.status == 200){
            return true;
          }
        }),
        catchError(() => {
          this.router.navigate(['/login']);
          return of(false);
        })
    )
  }
}
