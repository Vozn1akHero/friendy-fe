import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserAvatarService {
  newAvatar: File;
  newAvatarModalOpened: boolean;

  constructor(private http: HttpClient) {}

  toggleNewAvatarModal() {
    this.newAvatarModalOpened = !this.newAvatarModalOpened;
  }

  updateAvatar(newAvatar: File) {
    const content = new FormData();
    content.append("newAvatar", newAvatar);
    return this.http.put("/api/user/avatar", content, { responseType: "text" });
  }
}
