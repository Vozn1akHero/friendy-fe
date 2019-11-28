export default class NewMessageInChat {
  content: string;
  image: File;

  constructor(content: string, image: File) {
    this.content = content;
    this.image = image;
  }
}
