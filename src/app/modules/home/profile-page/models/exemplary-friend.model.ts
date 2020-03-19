export default class ExemplaryFriend {
  id: number;
  name: string;
  surname: string;
  avatarUrl: string;

  constructor(id: number, name: string, surname: string, avatarUrl: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = "http://localhost:5000/" + avatarUrl;
  }
}
