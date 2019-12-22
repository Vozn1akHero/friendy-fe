import * as moment from 'moment';

export default class User {
  id: number;
  birthday: string;
  city: string;
  email: string;
  avatarUrl: string;
  backgroundUrl: string;
  genderId: number;
  name: string;
  surname: string;
  profileBg: string;
  status: string;

  constructor(id: number,
              birthday: string,
              city: string,
              email: string,
              avatarPath: string,
              backgroundPath: string,
              genderId: number,
              name: string,
              surname: string,
              profileBg: string,
              status: string) {
    this.id = id;
    this.birthday = moment(birthday).format("DD.MM.YYYY");
    this.city = city;
    this.email = email;
    this.avatarUrl = "http://localhost:5000/" + avatarPath;
    this.backgroundUrl = backgroundPath == null ? null : "http://localhost:5000/" + backgroundPath;
    this.genderId = genderId;
    this.name = name;
    this.surname = surname;
    this.profileBg = profileBg;
    this.status = status;
  }
}
