export default class NewMessageInChat {
  Content: string;
  ImageBytes: string;

  constructor(content: string, imageBytes: string) {
    this.Content = content;
    this.ImageBytes = imageBytes;
  }
}
