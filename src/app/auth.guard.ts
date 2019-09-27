import {Injectable, OnDestroy} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as fromApp from './core/ngrx/store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {
  //private authServiceSubscription : Subscription;
  private _canActive : boolean;

  constructor(private http: HttpClient,
              private store: Store<fromApp.AppState>,
              private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean>|Promise<boolean>|boolean {
    return this.authService
      .isLoggedIn()
      .pipe(
      map(response=> {
        if(response.status == 200){
        //  this.store.dispatch(new UserActions.GetUserStart());
          return true;
        }
        else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    )
  }

  ngOnDestroy(): void {
    //this.authServiceSubscription.unsubscribe();
  }
}
