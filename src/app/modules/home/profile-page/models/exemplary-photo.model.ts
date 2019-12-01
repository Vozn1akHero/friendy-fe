export default class ExemplaryPhotoModel {
  photoUrl: string;

  constructor(path: string) {
    this.photoUrl = "http://localhost:5000/"+path;
  }
}
