export default class SentFriendRequestModel{
  receiverId: number;
  name: string;
  surname: string;
  avatarUrl: string;
  requestId: number;

  constructor(receiverId: number, name: string, surname: string, avatarPath: string, requestId: number) {
    this.receiverId = receiverId;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = "http://localhost:5000/" + avatarPath;
    this.requestId = requestId;
  }
}
