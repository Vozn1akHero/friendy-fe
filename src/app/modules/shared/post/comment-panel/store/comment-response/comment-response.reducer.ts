import * as CommentResponses from './comment-response.actions';
import CommentResponseModel from '../../models/comment-response.model';

export interface State {
  commentResponses: { [commentId: string]: CommentResponseModel[] };
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  loading: false,
  commentResponses: {},
  loaded: false
};

export function commentResponsesReducer(
  state: State = initialState,
  action: CommentResponses.CommentResponseActions
) {
  switch (action.type) {
    case CommentResponses.GET_COMMENTS_RESPONSES:
      return {
        ...state
      };
    case CommentResponses.SET_COMMENTS_RESPONSES:
      return {
        ...state,
        commentResponses: action.payload,
        loaded: true
      };
    case CommentResponses.FINALIZE_CREATION:
      return {
        ...state,
        commentResponses: function() {
          state.commentResponses[action.payload.commentId].push(action.payload);
          return state.commentResponses;
        }()
      };
    case CommentResponses.LIKE_IN_STATE:
      return {
        ...state,
        commentResponses: function() {
          state.commentResponses[action.payload.parentCommentId] = [...state.commentResponses[action.payload.parentCommentId].map(e => {
            if (e.id == action.payload.id) {
              e.isCommentLikedByUser = true;
              e.likesCount++;
            }
            return e;
          })];
          return state.commentResponses;
        }()
      };
    case CommentResponses.UNLIKE_IN_STATE:
      return {
        ...state,
        commentResponses: function() {
          state.commentResponses[action.payload.parentCommentId] = [...state.commentResponses[action.payload.parentCommentId].map(e => {
            if (e.id == action.payload.id) {
              e.isCommentLikedByUser = false;
              e.likesCount--;
            }
            return e;
          })];
          return state.commentResponses;
        }()
      };
    default:
      return state;
  }
}
