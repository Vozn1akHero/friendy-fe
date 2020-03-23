import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, take } from "rxjs/operators";
import { FriendRequest } from "../models/friend-request.model";

@Injectable()
export class FriendRequestService {
  constructor(private http: HttpClient) {}

  getSentFriendRequests(page: number, length: number) {
    return this.http
      .get(`api/friend/requests/sent`, { observe: "body" })
      .pipe(
        map((res: any[]) => [
          ...res.map(
            (value: any) =>
              new FriendRequest(
                value.requestId,
                value.receiverId,
                value.name,
                value.surname,
                value.isOnline,
                value.avatar
              )
          )
        ])
      );
  }

  getReceivedFriendRequests(page: number, length: number) {
    return this.http
      .get(`api/friend/requests/received`, { observe: "body" })
      .pipe(
        map((res: any[]) => [
          ...res.map(
            (value: any) =>
              new FriendRequest(
                value.requestId,
                value.authorId,
                value.name,
                value.surname,
                value.isOnline,
                value.avatar
              )
          )
        ])
      );
  }
}
