import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import UserSearchModelDto from "../models/user-search-criteria.model";
import { map } from "rxjs/operators";
import FoundUserModel from "../models/found-user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FriendsSearchService {
  constructor(private http: HttpClient) {}

  getUsersByCriteria(criteria: UserSearchModelDto, page: number) {
    return this.http
      .post(`/al-users?page=${page}`, criteria, { observe: "response" })
      .pipe(
        map((res: HttpResponse<any[]>) => {
          return [
            ...res.body.map(
              user =>
                new FoundUserModel(
                  user.id,
                  user.name,
                  user.surname,
                  user.avatar,
                  user.city,
                  user.onlineStatus,
                  user.friendshipStatus
                )
            )
          ];
        })
      );
  }

  getInitialUserList(page: number) {
    return this.http
      .get(`/al-users/trendy?page=${page}`, { observe: "response" })
      .pipe(
        map((res: HttpResponse<any[]>) => {
          return [
            ...res.body.map(
              user =>
                new FoundUserModel(
                  user.id,
                  user.name,
                  user.surname,
                  user.avatar,
                  user.city,
                  user.onlineStatus,
                  user.friendshipStatus
                )
            )
          ];
        })
      );
  }

  getByKeyword(keyword: string, page: number, length: number) {
    return this.http
      .get(`/al-users/by-keyword/${keyword}?page=${page}&length=${length}`, {
        observe: "response"
      })
      .pipe(
        map((res: HttpResponse<any[]>) => {
          return [
            ...res.body.map(
              user =>
                new FoundUserModel(
                  user.id,
                  user.name,
                  user.surname,
                  user.avatar,
                  user.city,
                  user.onlineStatus,
                  user.friendshipStatus
                )
            )
          ];
        })
      );
  }

  getFriendRequestStatus(userId: number) {
    return this.http.get(`api/friend/request/status/?receiverId=${userId}`, {
      observe: "response"
    });
  }

  sendFriendRequest(id: number) {
    return this.http.post(`api/friend/request/${id}`, { observe: "response" });
  }

  removeFriendRequest(id: number) {
    return this.http.delete(`api/friend/request/${id}`, {
      observe: "response"
    });
  }
}
