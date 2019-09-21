export default class Post{
  id?: number;
  userId: number;
  content: string;
  image?: string = null;
  userPostLikes?: any = [];
  userPostComments?: any = [];
  date?: Date;
}
