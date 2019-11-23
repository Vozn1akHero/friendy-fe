export default class BaseData {
  id: number;
  title: string;
  avatarUrl: string;

  constructor(id: number, title: string, avatarUrl: string) {
    this.id = id;
    this.title = title;
    this.avatarUrl = "http://localhost:5000/" + avatarUrl;
  }
}
