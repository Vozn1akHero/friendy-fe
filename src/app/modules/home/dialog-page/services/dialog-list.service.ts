import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import DialogModel from "../models/dialog.model";

@Injectable({
  providedIn: "root"
})
export class DialogListService {
  constructor(private http: HttpClient) {}

  getByPage(page: number, length: number) {
    return this.http
      .get(`/api/chat/dialog?page=${page}&length=${length}`, {
        observe: "body"
      })
      .pipe(
        map((res: any[]) => {
          return [
            ...res.map(
              (value: any) =>
                new DialogModel(
                  value.content,
                  value.senderId,
                  value.sender.avatarPath,
                  value.date,
                  value.imageUrl,
                  value.interlocutor.id,
                  value.interlocutor.avatarPath,
                  value.interlocutor.name,
                  value.interlocutor.surname,
                  value.writtenByRequestIssuer
                )
            )
          ];
        })
      );
  }
}
