import NewCommentModel from "./new-comment.model";

export class NewCommentResponseModel extends NewCommentModel {
  commentId: number;

  constructor(postId: number, commentId: number, content: string, image: File) {
    super(postId, content, image);
    this.commentId = commentId;
  }
}
