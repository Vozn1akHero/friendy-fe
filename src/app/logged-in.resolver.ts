import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {AuthService} from './core/auth/auth.service';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class LoggedInResolver implements Resolve<boolean> {
  constructor(private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot) : Observable<boolean> {
    return this.authService
      .isLoggedIn()
      .pipe(
        map(response=> {
          return response.status === 200;
        }),
        catchError(() => of(false))
      );
  }
}
