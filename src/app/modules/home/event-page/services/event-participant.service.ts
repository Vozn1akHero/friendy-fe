import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";
import { EventParticipant } from "src/app/shared/models/event-participant.model";

@Injectable({
  providedIn: "root"
})
export class EventParticipantService {
  constructor(private http: HttpClient) {}

  getRange(eventId: number, page: number, length: number) {
    return this.http
      .get(
        `api/event-participant/range/${eventId}?page=${page}&length=${length}`,
        { observe: "response" }
      )
      .pipe(
        map((res: HttpResponse<any[]>) => {
          return [
            ...res.body.map(
              value =>
                new EventParticipant(
                  value.id,
                  value.name,
                  value.surname,
                  value.avatarPath
                )
            )
          ];
        })
      );
  }

  filterByKeyword(
    eventId: number,
    keyword: string,
    page: number,
    length: number
  ) {
    return this.http
      .get(
        `api/event-participant/filter/${eventId}
    ?keyword=${keyword}&page=${page}&length=${length}`,
        { observe: "response" }
      )
      .pipe(
        map((res: HttpResponse<any[]>) => {
          return [
            ...res.body.map(
              value =>
                new EventParticipant(
                  value.id,
                  value.name,
                  value.surname,
                  value.avatarPath
                )
            )
          ];
        })
      );
  }
}
