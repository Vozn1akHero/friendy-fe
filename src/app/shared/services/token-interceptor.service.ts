import { Injectable } from "@angular/core";
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import { BehaviorSubject } from "rxjs";
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    if(request.url.includes('/app')){
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401) {
            // 401 handled in auth.interceptor
            if(localStorage.getItem("SESSION_HASH")){
              localStorage.removeItem("SESSION_HASH");
            }

            this.router.navigate(['login']);
          }
          return throwError(error);
        })
      )
    }

    return next.handle(request);
  }
}
