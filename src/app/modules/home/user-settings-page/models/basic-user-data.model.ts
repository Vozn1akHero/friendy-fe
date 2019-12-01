export default class BasicUserDataModel {
  name: string;
  surname: string;
  birthday: Date;

  constructor(name: string, surname: string, birthday: Date) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
  }

}
