export default class ExemplaryMessage {
  public chatUrlPart: string;
  public content: string;
  public hasImage: boolean;
  public userId: number;
  public userAvatar: string;
  public date: Date;

  constructor(chatUrlPart: string,
              content: string,
              hasImage: boolean,
              userId: number,
              userAvatar: string,
              date: Date) {
    this.chatUrlPart = chatUrlPart;
    this.content = content;
    this.hasImage = hasImage;
    this.userId = userId;
    this.userAvatar = userAvatar;
    this.date = date;
  }
}
