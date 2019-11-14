export default class ReceivedFriendRequestModel{
  authorId: number;
  name: string;
  surname: string;
  avatarUrl: string;
  requestId: number;

  constructor(authorId: number, name: string, surname: string, avatarPath: string, requestId: number) {
    this.authorId = authorId;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = avatarPath;
    this.requestId = requestId;
  }
}
