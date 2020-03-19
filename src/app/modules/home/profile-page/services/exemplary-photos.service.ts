import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ExemplaryPhotosService {
  constructor(private http: HttpClient) {}

  getExemplary(userId: number) {
    return this.http.get(`api/user-photo/${userId}/page/1?length=6`, {
      observe: "response"
    });
  }
}
