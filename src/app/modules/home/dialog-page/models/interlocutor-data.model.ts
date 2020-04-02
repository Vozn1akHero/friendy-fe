import { SessionModel } from "@app/shared/models/session.model";
import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables.ts";

export default class InterlocutorDataModel {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  city: string;
  birthday: Date;
  session: SessionModel;

  constructor(
    id: number,
    name: string,
    surname: string,
    avatar: string,
    city: string,
    birthday: Date,
    session: SessionModel
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatar = EnviromentVariables.fileHostBaseUrl + avatar;
    this.city = city;
    this.birthday = birthday;
    this.session = session;
  }
}
