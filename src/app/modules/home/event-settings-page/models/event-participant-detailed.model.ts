export default class EventParticipantDetailed {
  id: number;
  name: string;
  surname: string;
  avatarUrl: string;
  isAdmin: boolean;

  constructor(id: number, name: string, surname: string, avatarPath: string, isAdmin: boolean) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = "http://localhost:5000/" + avatarPath;
    this.isAdmin = isAdmin;
  }
}
