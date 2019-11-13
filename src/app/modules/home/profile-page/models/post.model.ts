export default class Post{
  id: number;
  userId: number;
  content: string;
  imagePath: string;
  likesCount: number;
  commentsCount: number;
  isPostLikedByUser: boolean;
  date: Date;

  constructor(id: number,
              userId: number,
              content: string,
              imagePath: string,
              likesCount: any,
              commentsCount: any,
              isPostLikedByUser: boolean,
              date: Date) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.imagePath = imagePath != null && `http://localhost:5000/${imagePath}`;
    this.likesCount = likesCount;
    this.commentsCount = commentsCount;
    this.isPostLikedByUser = isPostLikedByUser;
    this.date = date;
  }
}
