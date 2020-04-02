import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class FriendModel {
  id: number;
  name: string;
  surname: string;
  onlineStatus: boolean;
  avatarUrl: string;

  constructor(
    id: number,
    name: string,
    surname: string,
    onlineStatus: boolean,
    avatarPath: string
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.onlineStatus = onlineStatus;
    this.avatarUrl = EnviromentVariables.fileHostBaseUrl + avatarPath;
  }
}
