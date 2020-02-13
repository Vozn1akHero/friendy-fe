import {ActionReducerMap, createSelector, SelectorWithProps} from '@ngrx/store';
import * as postCommentsPanelComments from './post-comment/post-comment.reducer';
import * as postCommentsPanelCommentResponses from './comment-response/comment-response.reducer';

export interface AppState {
  postCommentsPanelComments: postCommentsPanelComments.State;
  postCommentsPanelCommentResponses: postCommentsPanelCommentResponses.State;
}

export const commentPanelReducerMap : ActionReducerMap<AppState> = {
  postCommentsPanelCommentResponses: postCommentsPanelCommentResponses.commentResponsesReducer,
  postCommentsPanelComments: postCommentsPanelComments.postCommentsReducer
};
