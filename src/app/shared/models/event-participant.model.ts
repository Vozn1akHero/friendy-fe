export class EventParticipant {
  id: number;
  name: number;
  surname: number;
  avatarUrl: string;

  constructor(id: number, name: number, surname: number, avatarPath: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = "http://localhost:5000/" + avatarPath;
  }
}
