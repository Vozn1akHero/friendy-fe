import * as PostCommentActions from "./post-comment.actions";
import CommentModel from "../../models/comment.model";

export interface State {
  comments: { [id: string]: CommentModel[] };
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  comments: {},
  loading: false,
  loaded: false
};

export function postCommentsReducer(
  state: State = initialState,
  action: PostCommentActions.PostCommentActions
) {
  switch (action.type) {
    case PostCommentActions.GET_POST_COMMENTS:
      return {
        ...state
      };
    case PostCommentActions.SET_POST_COMMENTS:
      return {
        ...state,
        comments: { ...state.comments, ...action.payload },
        loaded: true
      };
    case PostCommentActions.LIKE_IN_STATE:
      return {
        ...state,
        comments: (function() {
          state.comments[action.payload.postId] = [
            ...state.comments[action.payload.postId].map(e => {
              if (e.id == action.payload.commentId) {
                e.isCommentLikedByUser = true;
                e.likesCount++;
              }
              return e;
            })
          ];
          return state.comments;
        })()
      };
    case PostCommentActions.UNLIKE_IN_STATE:
      return {
        ...state,
        comments: (function() {
          state.comments[action.payload.postId] = [
            ...state.comments[action.payload.postId].map(e => {
              if (e.id == action.payload.commentId) {
                e.isCommentLikedByUser = false;
                e.likesCount--;
              }
              return e;
            })
          ];
          return state.comments;
        })()
      };
    case PostCommentActions.FINALIZE_CREATION:
      return {
        ...state,
        comments: (function() {
          return {
            ...state.comments,
            ...{
              [action.payload.postId]: [
                ...state.comments[action.payload.postId],
                action.payload
              ]
            }
          };
        })()
      };
    default:
      return state;
  }
}
