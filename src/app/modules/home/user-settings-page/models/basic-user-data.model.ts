export default class BasicUserDataModel {
  id: number;
  name: string;
  surname: string;
  birthday: Date;
  genderId: number;

  constructor(id: number, name: string, surname: string, birthday: Date, genderId: number) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    this.genderId = genderId;
  }
}
