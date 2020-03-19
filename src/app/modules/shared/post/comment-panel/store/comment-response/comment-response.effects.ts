import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../reducers";
import * as CommentResponseActions from "./comment-response.actions";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import CommentResponseService from "../../services/comment-response.service";
import CommentResponseModel from "../../models/comment-response.model";

@Injectable()
export default class CommentResponseEffects {
  @Effect() getCommentsByPostId = this.actions$.pipe(
    ofType(CommentResponseActions.GET_COMMENTS_RESPONSES),
    switchMap((action: CommentResponseActions.GetCommentResponses) => {
      return this.commentResponseService
        .getAllByCommentId(action.payload.commentId)
        .pipe(
          map((res: CommentResponseModel[]) => {
            return new CommentResponseActions.SetCommentResponses({
              [action.payload.commentId]: res
            });
          })
        );
    })
  );

  @Effect() removeCommentById = this.actions$.pipe(
    ofType(CommentResponseActions.REMOVE_BY_ID),
    switchMap((action: CommentResponseActions.RemoveById) => {
      return this.commentResponseService.delete(action.payload.id).pipe(
        map((res: CommentResponseModel) => {
          return new CommentResponseActions.RemoveById({ id: res.id });
        })
      );
    })
  );

  @Effect() create = this.actions$.pipe(
    ofType(CommentResponseActions.CREATE),
    switchMap((action: CommentResponseActions.Create) => {
      return this.commentResponseService.create(action.payload).pipe(
        map((res: CommentResponseModel) => {
          return new CommentResponseActions.FinalizeCreation(res);
        })
      );
    })
  );

  @Effect() createResponseToResponse = this.actions$.pipe(
    ofType(CommentResponseActions.CREATE_RESPONSE_TO_RESPONSE),
    switchMap((action: CommentResponseActions.CreateResponseToResponse) => {
      return this.commentResponseService
        .createResponseToResponse(action.payload)
        .pipe(
          map((res: CommentResponseModel) => {
            return new CommentResponseActions.FinalizeCreationResponseToResponse(
              res
            );
          })
        );
    })
  );

  @Effect() like = this.actions$.pipe(
    ofType(CommentResponseActions.LIKE),
    tap((action: CommentResponseActions.Like) =>
      this.store$.dispatch(
        new CommentResponseActions.LikeInState({
          parentCommentId: action.payload.parentCommentId,
          id: action.payload.id
        })
      )
    ),
    switchMap((action: CommentResponseActions.Like) => {
      return this.commentResponseService.like(action.payload.id);
    })
  );

  @Effect() unlike = this.actions$.pipe(
    ofType(CommentResponseActions.UNLIKE),
    tap((action: CommentResponseActions.Unlike) =>
      this.store$.dispatch(
        new CommentResponseActions.UnlikeInState({
          parentCommentId: action.payload.parentCommentId,
          id: action.payload.id
        })
      )
    ),
    switchMap((action: CommentResponseActions.Unlike) => {
      return this.commentResponseService.unlike(action.payload.id).pipe(
        map((res: any) => {}),
        catchError(err => {
          this.store$.dispatch(
            new CommentResponseActions.LikeInState({
              parentCommentId: action.payload.parentCommentId,
              id: action.payload.id
            })
          );
          return err;
        })
      );
    })
    /*switchMap((action: CommentResponseActions.Unlike) => {
      return this.commentResponseService.unlike(action.payload.id)
        .pipe(map((res:any)=>{
          return new CommentResponseActions.UnlikeInState({parentCommentId: action.payload.parentCommentId,
            id: action.payload.id});
        }))
    })*/
  );

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private commentResponseService: CommentResponseService
  ) {}
}
