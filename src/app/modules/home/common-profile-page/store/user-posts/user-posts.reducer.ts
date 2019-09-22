import * as ProfilePagePostsActions from './user-posts.actions';
import Post from '../../models/post.model';


export interface State {
  loading: boolean;
  posts: Post[];
}

const initialState: State = {
  loading: false,
  posts: []
};

export function commonProfilePagePostsReducer(
  state: State = initialState,
  action: ProfilePagePostsActions.CommonProfilePagePostsActions
) {
  switch (action.type) {
    case ProfilePagePostsActions.GET_POSTS_START:
      return {
        ...state,
        loading: true
      };
    case ProfilePagePostsActions.GET_POSTS:
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.posts]
      };
    case ProfilePagePostsActions.LIKE_POST:
      return {
        ...state,
        loading: false,
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
