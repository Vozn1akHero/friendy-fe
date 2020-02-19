export default class NewCommentModel{
  postId: number;
  content: string;
  image: File;

  constructor(postId: number, content: string, image: File) {
    this.postId = postId;
    this.content = content;
    this.image = image;
  }
}
