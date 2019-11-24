export default class EventAvatar {
  avatarUrl: string;

  constructor(avatarPath: string){
    this.avatarUrl = "http://localhost:5000/" + avatarPath;
  }
}
