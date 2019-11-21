export default class EventPost{
  id: number;
  eventId: number;
  content: string;
  imagePath: string;
  likesCount: number = 0;
  commentsCount: number = 0;
  postId: number;
  isPostLikedByUser: boolean = false;
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
    this.imagePath = imagePath != null && `http://localhost:5000/${imagePath}`;
    this.likesCount = likesCount;
    this.commentsCount = commentsCount;
    this.postId = postId;
    this.isPostLikedByUser = isPostLikedByUser;
    this.date = date;
  }
}
