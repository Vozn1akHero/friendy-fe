import { createSelector } from "@ngrx/store";
import { AppState } from "./reducers";

const selectComments = (state: AppState) =>
  state.postCommentsPanelComments.comments;
export const selectCommentsByPostId = createSelector(
  selectComments,
  (state, props) => {
    console.log(state, state[props.postId], props.postId);
    return state[props.postId];
  }
);

const selectCommentResponses = (state: AppState) =>
  state.postCommentsPanelCommentResponses.commentResponses;
export const selectCommentResponsesByCommentId = createSelector(
  selectCommentResponses,
  (state, props) => state[props.commentId]
);
