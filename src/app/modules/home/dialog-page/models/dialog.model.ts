import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables.ts";

export default class DialogModel {
  public content: string;
  public senderId: number;
  public avatarUrl: string;
  public date: Date;
  public imageUrl: string;
  public interlocutorId: number;
  public interlocutorAvatar: string;
  public interlocutorName: string;
  public interlocutorSurname: string;
  public writtenByRequestIssuer: boolean;

  constructor(
    content: string,
    senderId: number,
    avatarPath: string,
    date: Date,
    imageUrl: string,
    interlocutorId: number,
    interlocutorAvatarPath: string,
    interlocutorName: string,
    interlocutorSurname: string,
    writtenByRequestIssuer: boolean
  ) {
    this.content = content;
    this.senderId = senderId;
    this.avatarUrl = EnviromentVariables.fileHostBaseUrl + avatarPath;
    this.date = date;
    this.imageUrl = imageUrl && EnviromentVariables.fileHostBaseUrl + imageUrl;
    this.interlocutorId = interlocutorId;
    this.interlocutorAvatar =
      EnviromentVariables.fileHostBaseUrl + interlocutorAvatarPath;
    this.interlocutorName = interlocutorName;
    this.interlocutorSurname = interlocutorSurname;
    this.writtenByRequestIssuer = writtenByRequestIssuer;
  }
}
