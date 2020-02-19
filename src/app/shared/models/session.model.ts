export class SessionModel {
  id: number;
  sessionStart: number;
  sessionEnd: number;

  constructor(id: number, sessionStart: number, sessionEnd: number) {
    this.id = id;
    this.sessionStart = sessionStart;
    this.sessionEnd = sessionEnd;
  }
}
