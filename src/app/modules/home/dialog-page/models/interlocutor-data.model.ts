export default class InterlocutorDataModel {
  friendId: number;
  name: string;
  surname: string;
  avatarUrl: string;
  city: string;
  birthday: Date;
  isOnline: boolean;

  constructor(friendId: number, name: string, surname: string, avatar: string, city: string, birthday: Date, isOnline: boolean) {
    this.friendId = friendId;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = "http://localhost:5000/"+avatar;
    this.city=  city;
    this.birthday = birthday;
    this.isOnline = isOnline;
  }
}
