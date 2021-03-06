import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class Post {
  id: number;
  userId: number;
  avatarUrl: string;
  content: string;
  imageUrl: string;
  likesCount: number = 0;
  commentsCount: number = 0;
  postId: number;
  isPostLikedByUser: boolean = false;
  date: Date;

  constructor(
    id: number,
    userId: number,
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
    this.userId = userId;
    this.avatarUrl = `${EnviromentVariables.fileHostBaseUrl}${avatarPath}`;
    this.content = content;
    this.imageUrl =
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
