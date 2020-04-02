import { EnviromentVariables } from "./../../../../shared/helpers/EnviromentVariables";
export default class EventPost {
  id: number;
  eventId: number;
  avatarUrl: string;
  content: string;
  imagePath: string;
  likesCount: number;
  commentsCount: number;
  postId: number;
  isPostLikedByUser: boolean;
  date: Date;

  constructor(
    id: number,
    eventId: number,
    avatarPath: string,
    content: string,
    imagePath: string,
    likesCount: any,
    commentsCount: any,
    postId: number,
    isPostLikedByUser: boolean,
    date: Date
  ) {
    this.id = id;
    this.eventId = eventId;
    this.avatarUrl = EnviromentVariables.fileHostBaseUrl + avatarPath;
    this.content = content;
    this.imagePath =
      imagePath != null
        ? `${EnviromentVariables.fileHostBaseUrl}${imagePath}`
        : null;
    this.likesCount = likesCount;
    this.commentsCount = commentsCount;
    this.postId = postId;
    this.isPostLikedByUser = isPostLikedByUser;
    this.date = date;
  }
}
