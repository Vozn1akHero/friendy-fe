export default class MessageInChatModel {
  content: string;
  imageUrl: string;
  userId: number;
  date: Date;

  constructor(content: string, imagePath: string, userId: number, date: Date) {
    this.content = content;
    this.imageUrl = imagePath != null ? "http://localhost:5000/" + imagePath : null;
    this.userId = userId;
    this.date = date;
  }
}
