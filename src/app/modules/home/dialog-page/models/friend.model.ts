import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables.ts";

export class FriendModel {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  isOnline: boolean;

  constructor(
    id: number,
    name: string,
    surname: string,
    avatar: string,
    isOnline: boolean
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatar = EnviromentVariables.fileHostBaseUrl + avatar;
    this.isOnline = isOnline;
  }
}
