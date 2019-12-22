export default class UserPostModel{
  id: number;
  userId: number;
  content: string;
  imagePath: string;
  likesCount: number = 0;
  commentsCount: number = 0;
  postId: number;
  isPostLikedByUser: boolean;
  avatarUrl: string;
  date: Date;

  constructor(id: number,
              userId: number,
              content: string,
              imagePath: string,
              likesCount: any,
              commentsCount: any,
              postId: number,
              isPostLikedByUser: boolean,
              avatar: string,
              date: Date) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.imagePath = imagePath != null ? `http://localhost:5000/${imagePath}` : null;
    this.likesCount = likesCount;
    this.commentsCount = commentsCount;
    this.postId = postId;
    this.isPostLikedByUser = isPostLikedByUser;
    this.avatarUrl = "http://localhost:5000/" + avatar;
    this.date = date;
  }
}
