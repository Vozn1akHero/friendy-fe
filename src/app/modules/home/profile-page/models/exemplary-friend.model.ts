export default class ExemplaryFriend {
  id: number;
  avatarUrl: string;

  constructor(id: number, avatarUrl: string) {
    this.id = id;
    this.avatarUrl = "http://localhost:5000/" + avatarUrl;
  }
}
