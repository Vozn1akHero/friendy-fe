export default class EventPhoto{
  photoUrl: string;

  constructor(path: string) {
    this.photoUrl = "http://localhost:5000/"+path;
  }
}
