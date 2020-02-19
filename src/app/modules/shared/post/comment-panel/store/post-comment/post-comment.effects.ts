import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as PostCommentsActions from './post-comment.actions';
import {map, switchMap, tap} from 'rxjs/operators';
import PostCommentService from '../../services/post-comment.service';

@Injectable()
export default class PostCommentEffects {
  constructor(private actions$: Actions,
              private postCommentService : PostCommentService){}

  @Effect() getCommentsByPostId = this.actions$.pipe(
    ofType(PostCommentsActions.GET_POST_COMMENTS),
    switchMap((action: PostCommentsActions.GetPostComments) => {
      return this.postCommentService.getRange(action.payload.postId).pipe(map(res=>{
        return new PostCommentsActions.SetPostComments({[action.payload.postId]: res});
      }))
    })
  );

  @Effect() removeCommentById = this.actions$.pipe(
    ofType(PostCommentsActions.REMOVE_BY_ID),
    switchMap((action: PostCommentsActions.RemoveById) => {
      return this.postCommentService.delete(action.payload.id)
        .pipe(map((res:any)=>{
        return new PostCommentsActions.RemoveById({id: res.id,
          postId: action.payload.postId});
      }))
    })
  );

  @Effect() like = this.actions$.pipe(
    ofType(PostCommentsActions.LIKE),
    switchMap((action: PostCommentsActions.Like) => {
      return this.postCommentService.like(action.payload.commentId)
        .pipe(map((res:any)=>{
          return new PostCommentsActions.LikeInState({commentId: res.commentId,
            postId: action.payload.postId});
        }))
    })
  );

  @Effect() unlike = this.actions$.pipe(
    ofType(PostCommentsActions.UNLIKE),
    switchMap((action: PostCommentsActions.Unlike) => {
      return this.postCommentService.unlike(action.payload.commentId)
        .pipe(map((res:any)=>{
          return new PostCommentsActions.UnlikeInState({commentId: res.commentId,
            postId: action.payload.postId});
        }))
    })
  );

  @Effect() create = this.actions$.pipe(
    ofType(PostCommentsActions.CREATE),
    switchMap((action: PostCommentsActions.Create)=>{
      return this.postCommentService.create(action.payload).pipe(map((res)=>{
        return new PostCommentsActions.FinalizeCreation(res);
      }))
    })
  )
}
