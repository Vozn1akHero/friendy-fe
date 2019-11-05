export default class SentFriendRequestModel{
  receiverId: number;
  name: string;
  surname: string;
  requestId: number;

  constructor(receiverId: number, name: string, surname: string, requestId: number) {
    this.receiverId = receiverId;
    this.name = name;
    this.surname = surname;
    this.requestId = requestId;
  }
}
