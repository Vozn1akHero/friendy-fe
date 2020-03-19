import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ExemplaryFriendsService {
  constructor(private http: HttpClient) {}

  getByUserId(id: number) {
    return this.http.get(`/api/friend/${id}/paginate/1?length=6`, {
      observe: "body"
    });
  }
}
