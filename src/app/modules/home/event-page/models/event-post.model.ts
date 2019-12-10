export default class EventPost{
  id: number;
  eventId: number;
  content: string;
  imagePath: string;
  likesCount: number;
  commentsCount: number;
  postId: number;
  isPostLikedByUser: boolean;
  date: Date;

  constructor(id: number,
              eventId: number,
              content: string,
              imagePath: string,
              likesCount: any,
              commentsCount: any,
              postId: number,
              isPostLikedByUser: boolean,
              date: Date) {
    this.id = id;
    this.eventId = eventId;
    this.content = content;
    this.imagePath = imagePath != null ? `http://localhost:5000/${imagePath}` : null;
    this.likesCount = likesCount;
    this.commentsCount = commentsCount;
    this.postId = postId;
    this.isPostLikedByUser = isPostLikedByUser;
    this.date = date;
  }
}
