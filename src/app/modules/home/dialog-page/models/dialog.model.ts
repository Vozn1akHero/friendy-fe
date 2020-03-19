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
    this.avatarUrl = "http://localhost:5000/" + avatarPath;
    this.date = date;
    this.imageUrl = imageUrl && "http://localhost:5000/" + imageUrl;
    this.interlocutorId = interlocutorId;
    this.interlocutorAvatar = "http://localhost:5000/" + interlocutorAvatarPath;
    this.interlocutorName = interlocutorName;
    this.interlocutorSurname = interlocutorSurname;
    this.writtenByRequestIssuer = writtenByRequestIssuer;
  }
}
