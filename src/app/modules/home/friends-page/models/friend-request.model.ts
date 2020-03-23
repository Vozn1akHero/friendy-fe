export class FriendRequest {
  id: number;
  userId: number;
  name: string;
  surname: string;
  isOnline: boolean;
  avatar: string;

  constructor(
    id: number,
    userId: number,
    name: string,
    surname: string,
    isOnline: boolean,
    avatarPath: string
  ) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.surname = surname;
    this.isOnline = isOnline;
    this.avatar = "http://localhost:5000/" + avatarPath;
  }
}
