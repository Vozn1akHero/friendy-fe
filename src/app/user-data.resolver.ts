import * as UserDataActions from './modules/home/profile-page/store/user-data/user-data.actions';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from './core/ngrx/store/app.reducer';

@Injectable()
export class UserDataResolver implements Resolve<void> {
  constructor(private store: Store<fromApp.AppState>) {}

  resolve(route: ActivatedRouteSnapshot) : void {
    this.store.dispatch(new UserDataActions.GetUserData());
  }
}
