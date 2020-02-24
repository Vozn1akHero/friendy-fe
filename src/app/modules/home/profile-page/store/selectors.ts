import {createSelector} from '@ngrx/store';
import {AppState} from './reducers';

/*const selectProfiles = (state: AppState) => state.profilePageUserData.profiles;
export const selectCommentsByPostId = createSelector(
  selectProfiles,
  (state, props) => state[props.userId]
);*/

const selectProfiles = (state: AppState) => state.profilePageUserData.profiles;
export const selectUserDataByUserId = createSelector(
  selectProfiles,
  (state, props) => state[props.userId]
);
