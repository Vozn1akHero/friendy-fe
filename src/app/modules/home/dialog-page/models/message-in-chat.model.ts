import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables.ts";

export default class MessageInChatModel {
  content: string;
  imageUrl: string;
  userId: number;
  date: Date;

  constructor(content: string, imagePath: string, userId: number, date: Date) {
    this.content = content;
    this.imageUrl =
      imagePath != null
        ? EnviromentVariables.fileHostBaseUrl + imagePath
        : null;
    this.userId = userId;
    this.date = date;
  }
}
