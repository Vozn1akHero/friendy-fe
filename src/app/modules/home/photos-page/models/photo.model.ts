export default class Photo {
  url: string;
  constructor(path: string){
    this.url = "http://localhost:5000/" + path;
  }
}
