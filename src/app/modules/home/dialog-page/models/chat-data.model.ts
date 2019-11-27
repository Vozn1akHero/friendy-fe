export default class ChatData {
  id: number;
  firstInterlocutorId: number;
  secondInterlocutorId: number;

  constructor(id: number, firstInterlocutorId: number, secondInterlocutorId: number) {
    this.id = id;
    this.firstInterlocutorId = firstInterlocutorId;
    this.secondInterlocutorId = secondInterlocutorId;
  }
}
