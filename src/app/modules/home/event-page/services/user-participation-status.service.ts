import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class UserParticipationStatusService {
  constructor(private http: HttpClient) {}

  getUserParticipationStatus(eventId: number) {
    return this.http
      .get(`api/event-participant/${eventId}/current-user-status`, {
        observe: "response"
      })
      .pipe(
        map((res: HttpResponse<any>) => {
          return res.body;
        })
      );
  }

  send(eventId: number) {
    return this.http.post(`api/event-participation-request/${eventId}`, {});
  }

  delete(eventId: number) {
    return this.http.delete(`api/event-participation-request/${eventId}`);
  }

  leave(eventId: number) {
    return this.http.delete(`api/event-participant/leave/${eventId}`);
  }
}
