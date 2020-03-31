import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { CommentType } from "../../comment-type.enum";

@Injectable({ providedIn: "root" })
export class NewCommentResponseService {
  private _commentType: BehaviorSubject<CommentType> = new BehaviorSubject(
    CommentType.ResponseToComment
  );
  private _initData: BehaviorSubject<
    | { postId: number; authorData: string; commentId: number }
    | {
        postId: number;
        authorData: string;
        commentId: number;
        responseToCommentId: number;
      }
  > = new BehaviorSubject(null);

  public get commentType() {
    return this._commentType.getValue();
  }

  public set commentType(value: CommentType) {
    this._commentType.next(value);
  }

  public set initData(
    value:
      | { postId: number; authorData: string; commentId: number }
      | {
          postId: number;
          authorData: string;
          commentId: number;
          responseToCommentId: number;
        }
  ) {
    this._initData.next(value);
  }

  public get initData() {
    return this._initData.getValue();
  }

  public get initData$() {
    return this._initData.asObservable();
  }

  public get responseToCommentInitData(): {
    postId: number;
    authorData: string;
    commentId: number;
  } {
    return this._initData.getValue() as {
      postId: number;
      authorData: string;
      commentId: number;
    };
  }

  public get responseToResponseInitData(): {
    postId: number;
    authorData: string;
    commentId: number;
    responseToCommentId: number;
  } {
    return this._initData.getValue() as {
      postId: number;
      authorData: string;
      commentId: number;
      responseToCommentId: number;
    };
  }
}
