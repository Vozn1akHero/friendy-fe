import {Component, Input, OnInit} from '@angular/core';
import FoundUserModel from '../../models/found-user.model';
import {FriendsSearchService} from '../../services/friends-search.service';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import * as UserListActions from '../../store/user-list/user-list.actions';
import {BehaviorSubject, Observable} from 'rxjs';
import {ScrollableListNotifierService} from '../../../../../shared/services/scrollable-list-notifier.service';


@Component({
  selector: 'app-found-users-list',
  templateUrl: './found-users-list.component.html',
  styleUrls: ['./found-users-list.component.scss']
})
export class FoundUsersListComponent implements OnInit {
  userList$: Observable<FoundUserModel[]>;
  initialListLoaded$: Observable<boolean>;
  initialListShown$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  currentPaginationIndex: number = 1;

  constructor(private friendsSearchService: FriendsSearchService,
              private store: Store<AppState>,
              private scrollableListNotifierService : ScrollableListNotifierService,
              private subscriptionManager : SubscriptionManager) { }

  ngOnInit() {
    this.setInitialList();
    this.setListScrollListener();
    this.setListenerOnListType();
  }

  setInitialList(){
    this.store.dispatch(new UserListActions.GetInitialList({page: 1}));
    this.userList$ = this.store.select(e=>e.friendsSearchInitialList.users);
    this.initialListLoaded$ = this.store.select(e=>e.friendsSearchInitialList.loaded);
  }

  setListenerOnListType(){
    this.subscriptionManager.add(this.initialListShown$.subscribe(value => {
      if(value){
        this.currentPaginationIndex = 1;
      }
    }))
  }

  setListScrollListener(){
    this.subscriptionManager.add(this.scrollableListNotifierService.endReached$.subscribe(value => {
      if(value){
        if(this.initialListShown$.getValue()){
          this.currentPaginationIndex = this.scrollableListNotifierService.currentPage;
          this.store.dispatch(new UserListActions.GetInitialList({
            page: this.currentPaginationIndex }));
          this.scrollableListNotifierService.setDefaultValue();
        }
      }
    }))
  }

  onSendFriendRequestBtnClick(id: number){
    this.subscriptionManager.add(this.friendsSearchService
      .sendFriendRequest(id)
      .subscribe(response => {

      }))
  }

  onRemoveFriendRequestBtnClick(id: number){
    this.subscriptionManager.add(this.friendsSearchService
      .removeFriendRequest(id)
      .subscribe(response => {

      }))
  }
}
