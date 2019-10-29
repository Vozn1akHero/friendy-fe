import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {State, Store} from '@ngrx/store';
import * as fromApp from '../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import * as UserFriendsActions from './store/user-friends/user-friends.actions';
import {ActivatedRoute} from '@angular/router';
import {FriendsPageService} from './services/friends-page.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss']
})
export class FriendsPageComponent implements OnInit {
  friends$: Observable<any[]>;
  friendsLoading$: Observable<boolean>;

  constructor(private renderer: Renderer2,
              private friendsPageService: FriendsPageService,
              private activatedRoute: ActivatedRoute,
              private store: Store<fromApp.AppState>) {
    this.store.dispatch(new UserFriendsActions.GetFriends({startIndex: 0, lastIndex: 9}));
  }

  ngOnInit() {
    this.friendsLoading$ = this.store.select(state => state.friendsPageUserFriends.loading);

    this.friends$ = this.store.select(state => state.friendsPageUserFriends.friends);
  }

  searchFriends(searchTerm) {
    this.store.dispatch(new UserFriendsActions.FilterFriends({keyword: searchTerm}));
  }
}
