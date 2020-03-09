import {SessionModel} from '../../../../shared/models/session.model';

export default class InterlocutorDataModel {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  city: string;
  birthday: Date;
  session: SessionModel;

  constructor(id: number, name: string, surname: string, avatar: string, city: string, birthday: Date, session: SessionModel) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatar = "http://localhost:5000/"+avatar;
    this.city=  city;
    this.birthday = birthday;
    this.session = session;
  }
}
