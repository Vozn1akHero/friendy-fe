import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserFriendsService {
  constructor(private http: HttpClient) {}

  getByUserId(id: number, page: number = 1, length: number = 6) {
    return this.http.get(
      `/api/friend/${id}/paginate/${page}?length=${length}`,
      {
        observe: "body"
      }
    );
  }
}
