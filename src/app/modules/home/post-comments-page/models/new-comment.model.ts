export default class NewCommentModel{
  postId: number;
  content: string;

  constructor(postId: number, content: string) {
    this.postId = postId;
    this.content = content;
  }
}
