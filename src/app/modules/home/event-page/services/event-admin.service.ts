import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EventAdminService {
  constructor(private http: HttpClient) {}

  isUserAdmin(eventId: number) {
    return this.http
      .get(`api/event-admins/is-admin/${eventId}`, { observe: "body" })
      .pipe(
        map((res: boolean) => {
          return res;
        }),
        catchError(err => {
          alert(err);
          return of(err);
        })
      );
  }
}
