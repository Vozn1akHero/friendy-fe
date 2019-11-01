export default class MessageInChatModel {
  content: string;
  isUserAuthor:boolean;
  date: Date;

  constructor(content: string, isUserAuthor: boolean, date: Date) {
    this.content = content;
    this.isUserAuthor = isUserAuthor;
    this.date = date;
  }
}
