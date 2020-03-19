import { tap, map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { Injectable, Injector } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable()
export class NotFoundHttpInterceptor implements HttpInterceptor {
  url = ["/api/user"];

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
          }
        }
        return throwError(err);
      })
    );
  }
}
