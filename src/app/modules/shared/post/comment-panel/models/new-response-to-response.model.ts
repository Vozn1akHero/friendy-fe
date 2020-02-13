export default class NewResponseToResponseModel {
  postId: number;
  responseId: number;
  content: string;
  image: File;

  constructor(postId: number, responseId: number, content: string, image: File) {
    this.postId = postId;
    this.responseId = responseId;
    this.content = content;
    this.image = image;
  }
}
