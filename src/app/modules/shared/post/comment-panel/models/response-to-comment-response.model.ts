export default class ResponseToCommentResponseModel {
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

  constructor(id: number,
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
              date: Date) {
    this.id = id;
    this.authorId = authorId;
    this.authorName = authorName;
    this.authorSurname = authorSurname;
    this.authorAvatarUrl = "http://localhost:5000/" + authorAvatarPath;
    this.content = content;
    this.likesCount = likesCount;
    this.postId = postId;
    this.commentAuthorName = commentAuthorName;
    this.commentAuthorSurname = commentAuthorSurname;
    this.commentId = commentId;
    this.isCommentLikedByUser = isCommentLikedByUser;
    this.date = date;
  }
}
