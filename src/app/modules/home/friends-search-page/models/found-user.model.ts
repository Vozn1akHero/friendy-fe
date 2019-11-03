export default class FoundUserModel {
  id: number;
  name: string;
  surname: string;
  avatar: string;

  constructor(id: number, name: string, surname: string, avatar: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatar = "data:image/png;base64," + avatar;
  }
}
