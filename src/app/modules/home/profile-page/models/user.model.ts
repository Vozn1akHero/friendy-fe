import * as moment from 'moment';
import {SessionModel} from '../../../../shared/models/session.model';
import City from '../../../../shared/models/city.model';

export default class User {
  id: number;
  birthday: string;
  city: City;
  email: string;
  avatarUrl: string;
  backgroundUrl: string;
  genderId: number;
  name: string;
  surname: string;
  session: SessionModel;
  status: string;

  constructor(id: number,
              birthday: string,
              city: City,
              email: string,
              avatarPath: string,
              backgroundPath: string,
              genderId: number,
              name: string,
              surname: string,
              session: SessionModel,
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
    this.session = session;
    this.status = status;
  }
}
