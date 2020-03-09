export class SessionModel {
  id: number;
  sessionStart: Date;
  sessionEnd: Date;

  constructor(id: number, sessionStart: Date, sessionEnd: Date) {
    this.id = id;
    this.sessionStart = sessionStart;
    this.sessionEnd = sessionEnd;
  }
}
