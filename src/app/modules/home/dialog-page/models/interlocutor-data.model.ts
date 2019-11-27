export default class InterlocutorDataModel {
  name: string;
  surname: string;
  friendId: number;
  avatarUrl: string;

  constructor(name: string, surname: string, friendId: number, avatar: string) {
    this.name = name;
    this.surname = surname;
    this.friendId = friendId;
    this.avatarUrl = "http://localhost:5000/"+avatar;
  }
}
