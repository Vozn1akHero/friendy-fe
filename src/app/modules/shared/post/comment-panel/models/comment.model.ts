import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class CommentModel {
  id: number;
  authorId: number;
  authorName: string;
  authorSurname: string;
  authorAvatarUrl: string;
  content: string;
  likesCount: number = 0;
  commentsCount: number = 0;
  postId: number;
  isCommentLikedByUser: boolean;
  date: Date;

  constructor(
    id: number,
    authorId: number,
    authorName: string,
    authorSurname: string,
    authorAvatarPath: string,
    content: string,
    likesCount: number,
    commentsCount: number,
    postId: number,
    isCommentLikedByUser: boolean,
    date: Date
  ) {
    this.id = id;
    this.authorId = authorId;
    this.authorName = authorName;
    this.authorSurname = authorSurname;
    this.authorAvatarUrl =
      EnviromentVariables.fileHostBaseUrl + authorAvatarPath;
    this.content = content;
    this.likesCount = likesCount;
    this.commentsCount = commentsCount;
    this.postId = postId;
    this.isCommentLikedByUser = isCommentLikedByUser;
    this.date = date;
  }
}
