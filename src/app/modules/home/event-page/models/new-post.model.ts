export default class NewPost{
  content: string;
  image: File;

  constructor(content: string, image: File) {
    this.content = content;
    this.image = image;
  }
}
