export default class ChatFriendBasicData {
  name: string;
  surname: string;
  friendId: number;
  avatar: string;

  constructor(name: string, surname: string, friendId: number, avatar: string) {
    this.name = name;
    this.surname = surname;
    this.friendId = friendId;
    this.avatar = "data:image/png;base64,"+avatar;
  }
}
