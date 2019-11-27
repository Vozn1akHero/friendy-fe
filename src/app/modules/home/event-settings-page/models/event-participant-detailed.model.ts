export default class EventParticipantDetailed {
  id: number;
  name: number;
  surname: number;
  avatarUrl: string;
  isAdmin: boolean;

  constructor(id: number, name: number, surname: number, avatarPath: string, isAdmin: boolean) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = "http://localhost:5000/" + avatarPath;
    this.isAdmin = isAdmin;
  }
}
