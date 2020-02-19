import NewCommentModel from './new-comment.model';

export default class NewResponseToResponseModel extends NewCommentModel{
  responseToCommentId: number;
  mainCommentId: number;

  constructor(postId: number,
              responseId: number,
              mainCommentId: number,
              content: string,
              image: File) {
    super(postId, content, image);
    this.responseToCommentId = responseId;
    this.mainCommentId = mainCommentId;
  }
}
