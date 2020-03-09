import City from '../../../../shared/models/city.model';

export default class BasicUserDataModel {
  id: number;
  name: string;
  surname: string;
  birthday: Date;
  genderId: number;
  city: City;

  constructor(id: number, name: string, surname: string, birthday: Date, genderId: number, city: City) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    this.genderId = genderId;
    this.city = city;
  }
}
