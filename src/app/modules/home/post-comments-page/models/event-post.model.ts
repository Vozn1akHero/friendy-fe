export default class EventPostModel{
  id: number;
  eventId: number;
  content: string;
  imagePath: string;
  likesCount: number = 0;
  commentsCount: number = 0;
  postId: number;
  isPostLikedByUser: boolean = false;
  avatarUrl: string;
  date: Date;

  constructor(id: number,
              eventId: number,
              content: string,
              imagePath: string,
              likesCount: any,
              commentsCount: any,
              postId: number,
              isPostLikedByUser: boolean,
              avatarPath: string,
              date: Date) {
    this.id = id;
    this.eventId = eventId;
    this.content = content;
    this.imagePath = imagePath != null ? `http://localhost:5000/${imagePath}` : null;
    this.likesCount = likesCount;
    this.commentsCount = commentsCount;
    this.postId = postId;
    this.isPostLikedByUser = isPostLikedByUser;
    this.avatarUrl = "http://localhost:5000/" + avatarPath;
    this.date = date;
  }
}
