export default class Friend {
  id: number;
  name: string;
  surname: string;
  onlineStatus: boolean;
  dialogLink: string;
  avatar: string;

  constructor(id: number, name: string, surname: string, onlineStatus: boolean, dialogLink: string, avatar: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.onlineStatus = onlineStatus;
    this.dialogLink = dialogLink;
    this.avatar = "data:image/png;base64," + avatar;
  }
}
