export default class FriendModel {
  id: number;
  name: string;
  surname: string;
  onlineStatus: boolean;
  dialogLink: string;
  avatarUrl: string;

  constructor(id: number, name: string, surname: string, onlineStatus: boolean, dialogLink: string, avatarPath: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.onlineStatus = onlineStatus;
    this.dialogLink = dialogLink;
    this.avatarUrl = "http://localhost:5000" + avatarPath;
  }
}
