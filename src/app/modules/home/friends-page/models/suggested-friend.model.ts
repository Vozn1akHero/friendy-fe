export default class SuggestedFriendModel {
  id: number;
  avatarUrl: string;
  name: string;
  surname: string;

  constructor(id: number, avatarPath: string, name: string, surname: string) {
    this.id = id;
    this.avatarUrl = "http://localhost:5000/"+avatarPath;
    this.name = name;
    this.surname = surname;
  }
}
