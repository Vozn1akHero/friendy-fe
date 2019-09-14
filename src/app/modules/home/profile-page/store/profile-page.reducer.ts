import * as ProfilePageActions from './profile-page.actions'
import User from '../../../../data/schema/user';
import {Observable} from 'rxjs';
import {Post} from '../models/post.model';

export interface State {
  posts: Post[]
}

const initialState: State = {
  posts: []
};

export function profilePageReducer(
  state: State = initialState,
  action: ProfilePageActions.ProfilePageActions
) {
  switch (action.type) {
    case ProfilePageActions.GET_USER_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}
