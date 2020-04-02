import * as moment from "moment";
import { SessionModel } from "../../../../shared/models/session.model";
import City from "../../../../shared/models/city.model";
import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables.ts";

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

  constructor(
    id: number,
    birthday: string,
    city: City,
    email: string,
    avatarPath: string,
    backgroundPath: string,
    genderId: number,
    name: string,
    surname: string,
    session: SessionModel,
    status: string
  ) {
    this.id = id;
    this.birthday = moment(birthday).format("DD.MM.YYYY");
    this.city = city;
    this.email = email;
    this.avatarUrl = EnviromentVariables.fileHostBaseUrl + avatarPath;
    this.backgroundUrl =
      backgroundPath == null
        ? null
        : EnviromentVariables.fileHostBaseUrl + backgroundPath;
    this.genderId = genderId;
    this.name = name;
    this.surname = surname;
    this.session = session;
    this.status = status;
  }
}
