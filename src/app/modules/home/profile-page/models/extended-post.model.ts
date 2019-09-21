export default class ExtendedPost{
  userId: number;
  content: string;
  image: string;
  commentsQuantity: number = 0;
  likesQuantity: number = 0;
  date?: Date;
  timePassed: string;
}
