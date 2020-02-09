export default class InterlocutorDataModel {
  friendId: number;
  name: string;
  surname: string;
  avatarUrl: string;

  constructor(friendId: number, name: string, surname: string, avatar: string) {
    this.friendId = friendId;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = "http://localhost:5000/"+avatar;
  }
}
