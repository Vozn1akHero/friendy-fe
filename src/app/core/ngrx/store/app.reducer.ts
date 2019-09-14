import { ActionReducerMap } from '@ngrx/store';

import * as fromProfilePage from '../../../modules/home/profile-page/store/profile-page.reducer';
import * as fromCommonProfilePage from '../../../modules/home/common-profile-page/store/common-profile-page.reducer';
import * as fromUser from '../common/store/user.reducer';

export interface AppState {
  commonProfilePage: fromCommonProfilePage.State;
  profilePage: fromProfilePage.State;
  user: fromUser.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  commonProfilePage: fromCommonProfilePage.commonProfilePageReducer,
  profilePage: fromProfilePage.profilePageReducer,
  user: fromUser.userReducer
};
