import {Injectable, OnDestroy} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import {Observable, Subscription} from 'rxjs';
import * as UserActions from './core/ngrx/common/store/user.actions';
import {HttpClient} from '@angular/common/http';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {
  private authServiceSubscription : Subscription;
  private _canActive : boolean;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean>|Promise<boolean>|boolean {
    /*this.http.get('/api/auth/getUserAuthStatus', {observe: 'response'}).subscribe(res => {
      this._canActive = res.status == 200;
    });*/
    return this.authService.isLoggedIn().pipe(
      map(response=> {
        if(response.status == 200){
          return true;
        }
        else return false;
      })
    )
  }

  ngOnDestroy(): void {
    this.authServiceSubscription.unsubscribe();
  }
}
