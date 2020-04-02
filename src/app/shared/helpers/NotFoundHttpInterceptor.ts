import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class NotFoundHttpInterceptor implements HttpInterceptor {
  url = ["/api/user", "/api/event"];

  constructor(private _injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
          if (this.url.some(value => req.url.includes(value))) {
            const router = this._injector.get(Router);
            router.navigate(["/404"]);
            return;
          }
        }
        return throwError(err);
      })
    );
  }
}
