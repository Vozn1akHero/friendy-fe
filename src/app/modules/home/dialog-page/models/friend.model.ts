export class FriendModel {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  isOnline: boolean;

  constructor(id: number, name: string, surname: string, avatar: string, isOnline: boolean) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatar = "http://localhost:5000/"+avatar;
    this.isOnline = isOnline;
  }
}
