export default class ExemplaryFriend {
  id: number;
  avatar: string;

  constructor(id: number, avatar: string) {
    this.id = id;
    this.avatar = "data:image/png;base64," + avatar;
  }
}
