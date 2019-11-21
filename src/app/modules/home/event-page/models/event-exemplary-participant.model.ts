export default class EventExemplaryParticipant {
  id: number;
  avatarUrl: string;

  constructor(id: number, avatarPath: string) {
    this.id = id;
    this.avatarUrl = "http://localhost:5000/"+avatarPath;
  }
}
