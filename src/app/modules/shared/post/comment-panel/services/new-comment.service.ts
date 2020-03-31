import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CommentType } from "../../comment-type.enum";

@Injectable({ providedIn: "root" })
export class NewCommentService {
  private _initData: BehaviorSubject<
    | { postId: number }
    | { postId: number; authorData: string; commentId: number }
    | {
        postId: number;
        authorData: string;
        commentId: number;
        responseToCommentId: number;
      }
  > = new BehaviorSubject(null);

  public set initData(value: { postId: number }) {
    this._initData.next(value);
  }

  public get commentToPostInitData(): { postId: number } {
    return this._initData.getValue();
  }
}
