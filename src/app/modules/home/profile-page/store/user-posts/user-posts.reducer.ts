import * as UserPostsActions from "./user-posts.actions";
import Post from "../../models/post.model";

export interface State {
  posts: { [id: number]: Post[] };
  loaded: { [id: number]: boolean };
}

const initialState: State = {
  posts: {},
  loaded: {}
};

export function userPostsReducer(
  state: State = initialState,
  action: UserPostsActions.UserPostsActions
) {
  switch (action.type) {
    case UserPostsActions.GET_USER_POSTS:
      return {
        ...state
      };
    case UserPostsActions.SET_USER_POSTS:
      return {
        ...state,
        loaded: {
          ...state.loaded,
          [action.payload.id]: true
        },
        posts: {
          ...state.posts,
          [action.payload.id]: [...action.payload.posts]
        }
      };
    case UserPostsActions.FULFILL_USER_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.id]: [
            ...state.posts[action.payload.id],
            ...action.payload.posts
          ]
        }
      };
    case UserPostsActions.ADD_POST:
      return {
        ...state
      };
    case UserPostsActions.SET_ADDED_POST:
      return {
        ...state,
        posts: (function() {
          state.posts[action.payload.id].push(action.payload.post);
          return state.posts;
        })()
      };
    case UserPostsActions.REMOVE_POST_FROM_STATE:
      return {
        ...state,
        posts: (function() {
          state.posts[action.payload.id].filter(
            post => post.postId !== action.payload.id
          );
          return state.posts;
        })()
      };
    default:
      return state;
  }
}
