export default class Photo {
  id: number;
  url: string;
  constructor(id:number, path: string){
    this.id = id;
    this.url = "http://localhost:5000/" + path;
  }
}
