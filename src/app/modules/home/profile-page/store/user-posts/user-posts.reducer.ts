import * as UserPostsActions from './user-posts.actions'
import Post from '../../models/post.model';


export interface State {
  posts: Post[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  loading: false,
  posts: [],
  loaded: false
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
        posts: action.payload,
        loaded: true
      };
    case UserPostsActions.START_FULFILLING_USER_POSTS:
      return {
        ...state
      };
    case UserPostsActions.FULFILL_USER_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload]
      };
    case UserPostsActions.ADD_POST:
      return {
        ...state,
        loading: true
      };
    case UserPostsActions.SET_ADDED_POST:
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.posts]
      };
    case UserPostsActions.REMOVE_POST_FROM_STATE:
      return {
        ...state,
        posts: [...state.posts.filter(post => post.postId !== action.payload.id)]
      };
    case UserPostsActions.LIKE_POST_IN_STATE:
      return {
        ...state,
        posts: [...state.posts.map(post => {
          if(post.postId == action.payload.id) {
            post.likesCount++;
          }
          return post;
        })]
      };
    case UserPostsActions.UNLIKE_POST_IN_STATE:
      return {
        ...state,
        posts: [...state.posts.map(post => {
          if(post.postId === action.payload.id) {
            post.likesCount--;
          }
          return post;
        })]
      };
    default:
      return state;
  }
}
