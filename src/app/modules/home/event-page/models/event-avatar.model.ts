export default class EventAvatar {
  avatarPath: string;

  constructor(avatarPath: string){
    this.avatarPath = "http://localhost:5000/" + avatarPath;
  }
}
