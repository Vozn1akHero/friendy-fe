import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class FoundUserModel {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  city: string;
  isOnline: boolean;
  friendshipStatusIndex: number;

  constructor(
    id: number,
    name: string,
    surname: string,
    avatar: string,
    city: string,
    isOnline: boolean,
    friendshipStatusIndex: number
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatar = EnviromentVariables.fileHostBaseUrl + avatar;
    this.city = city;
    this.isOnline = isOnline;
    this.friendshipStatusIndex = friendshipStatusIndex;
  }
}
