export default class UserAvatar {
  avatarBytes: string;

  constructor(avatarBytes: string) {
    this.avatarBytes = "data:image/png;base64,"+avatarBytes;
  }
}
