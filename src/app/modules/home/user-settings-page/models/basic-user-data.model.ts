export default class BasicUserDataModel {
  id: number;
  name: string;
  surname: string;
  birthday: Date;

  constructor(id: number, name: string, surname: string, birthday: Date) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
  }

}
