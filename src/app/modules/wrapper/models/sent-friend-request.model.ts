import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class SentFriendRequestModel {
  receiverId: number;
  name: string;
  surname: string;
  avatarUrl: string;
  requestId: number;

  constructor(
    receiverId: number,
    name: string,
    surname: string,
    avatarPath: string,
    requestId: number
  ) {
    this.receiverId = receiverId;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = EnviromentVariables.fileHostBaseUrl + avatarPath;
    this.requestId = requestId;
  }
}
