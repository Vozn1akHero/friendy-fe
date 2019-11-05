export default class ReceivedFriendRequestModel{
  authorId: number;
  name: string;
  surname: string;
  requestId: number;

  constructor(authorId: number, name: string, surname: string, requestId: number) {
    this.authorId = authorId;
    this.name = name;
    this.surname = surname;
    this.requestId = requestId;
  }
}
