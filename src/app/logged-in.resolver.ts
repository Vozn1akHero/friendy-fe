import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {AuthService} from './core/auth/auth.service';
import {map} from 'rxjs/operators';

@Injectable()
export class LoggedInResolver implements Resolve<boolean> {
  constructor(private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.authService
      .isLoggedIn()
      .pipe(
        map(response=> {
          console.log(response.status == 200);
          return response.status == 200;
        })
      )
  }
}
