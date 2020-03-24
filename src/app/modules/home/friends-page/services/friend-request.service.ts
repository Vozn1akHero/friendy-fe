import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, take } from "rxjs/operators";
import { FriendRequest } from "../models/friend-request.model";

@Injectable()
export class FriendRequestService {
  constructor(private http: HttpClient) {}

  getSent(page: number, length: number) {
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

  filterSentByKeyword(keyword: string, page: number, length: number) {
    return this.http
      .get(
        `api/friend/requsts/sent?keyword=${keyword}&page=${page}&length=${length}`,
        { observe: "body" }
      )
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

  filterReceivedByKeyword(keyword: string, page: number, length: number) {
    return this.http
      .get(
        `api/friend/requsts/received?keyword=${keyword}&page=${page}&length=${length}`,
        { observe: "body" }
      )
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

  getReceived(page: number, length: number) {
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
