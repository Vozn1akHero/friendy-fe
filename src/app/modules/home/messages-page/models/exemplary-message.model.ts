export default class ExemplaryMessage {
  chatUrlPart: string;
  content: string;
  hasImage: boolean;
  userAvatar: Int8Array;

  constructor(chatUrlPart: string, content: string, hasImage: boolean, userAvatar: Int8Array) {
    this.chatUrlPart = chatUrlPart;
    this.content = content;
    this.hasImage = hasImage;
    this.userAvatar = userAvatar;
  }
}
