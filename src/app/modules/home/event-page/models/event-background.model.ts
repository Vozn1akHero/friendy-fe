export default class EventBackground {
  backgroundUrl: string;

  constructor(backgroundPath: string){
    this.backgroundUrl = "http://localhost:5000/" + backgroundPath;
  }
}
