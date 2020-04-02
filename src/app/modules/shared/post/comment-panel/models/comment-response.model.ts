import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class CommentResponseModel {
  id: number;
  authorId: number;
  authorName: string;
  authorSurname: string;
  authorAvatarUrl: string;
  content: string;
  likesCount: number = 0;
  postId: number;
  commentAuthorName: string;
  commentAuthorSurname: string;
  commentId: number;
  isCommentLikedByUser: boolean;
  date: Date;
  responseToCommentId?: number;

  constructor(
    id: number,
    authorId: number,
    authorName: string,
    authorSurname: string,
    authorAvatarPath: string,
    content: string,
    likesCount: number,
    postId: number,
    commentAuthorName: string,
    commentAuthorSurname: string,
    commentId: number,
    isCommentLikedByUser: boolean,
    date: Date,
    responseToCommentId?: number
  ) {
    this.id = id;
    this.authorId = authorId;
    this.authorName = authorName;
    this.authorSurname = authorSurname;
    this.authorAvatarUrl =
      EnviromentVariables.fileHostBaseUrl + authorAvatarPath;
    this.content = content;
    this.likesCount = likesCount;
    this.postId = postId;
    this.commentAuthorName = commentAuthorName;
    this.commentAuthorSurname = commentAuthorSurname;
    this.commentId = commentId;
    this.isCommentLikedByUser = isCommentLikedByUser;
    this.date = date;
    this.responseToCommentId = responseToCommentId;
  }
}
