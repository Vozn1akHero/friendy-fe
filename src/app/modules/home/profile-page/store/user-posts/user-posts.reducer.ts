import * as UserPostsActions from './user-posts.actions'
import Post from '../../models/post.model';


export interface State {
  posts: Post[];
  loading: boolean;
}

const initialState: State = {
  loading: false,
  posts: []
};

export function userPostsReducer(
  state: State = initialState,
  action: UserPostsActions.UserPostsActions
) {
  switch (action.type) {
    case UserPostsActions.GET_USER_POSTS_START:
      return {
        ...state,
        loading: true
      };
    case UserPostsActions.GET_USER_POSTS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case UserPostsActions.ADD_POST_START:
      return {
        ...state,
        loading: true
      };
    case UserPostsActions.ADD_POST:
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.posts]
      };
    case UserPostsActions.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => {
          if(post.id !== action.payload.id){
            return post;
          }
        })
      };
    case UserPostsActions.LIKE_POST:
      return {
        ...state,
        posts: [...state.posts.map(post => {
          if(post.id === action.payload.id) {
            post.userPostLikes.push(action.payload)
          }
          return post;
        })]
      };
    default:
      return state;
  }
}
