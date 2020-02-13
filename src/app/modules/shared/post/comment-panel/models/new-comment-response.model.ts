export class NewCommentResponseModel {
  postId: number;
  commentId: number;
  content: string;
  image: File;

  constructor(postId: number, commentId: number, content: string, image: File) {
    this.postId = postId;
    this.commentId = commentId;
    this.content = content;
    this.image = image;
  }
}
