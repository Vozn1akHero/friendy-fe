import { Component, OnInit } from '@angular/core';
import * as UserFriendsActions from '../../store/user-friends/user-friends.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';

@Component({
  selector: 'app-friends-search-controls',
  templateUrl: './friends-search-controls.component.html',
  styleUrls: ['./friends-search-controls.component.scss']
})
export class FriendsSearchControlsComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  searchFriends(searchTerm) {
    this.store.dispatch(new UserFriendsActions.FilterFriends({keyword: searchTerm}));
  }
}
