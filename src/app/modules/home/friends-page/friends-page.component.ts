import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {State, Store} from '@ngrx/store';
import * as fromApp from '../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import * as UserFriendsActions from './store/user-friends/friends-page.actions'
import {ActivatedRoute} from '@angular/router';
import {FriendsPageService} from './services/friends-page.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss']
})
export class FriendsPageComponent implements OnInit, OnDestroy {
  private friends$: Observable<any[]>;
  private friendsLoading$: Observable<boolean>;

  private foundUsers: any;
  private searchTerm: string;
  private searchTermInserted: boolean;
  private userSearchingActivated: boolean;

  private usersByCriteriaRes : Subscription;

  constructor(private renderer: Renderer2,
              private friendsPageService: FriendsPageService,
              private activatedRoute: ActivatedRoute,
              private store: Store<fromApp.AppState>,
              private state: State<fromApp.AppState>) {
    this.store.dispatch(new UserFriendsActions.GetFriends({ startIndex: 0, lastIndex: 9 }))
  }

  ngOnInit() {
    this.friendsLoading$ = this.store.select(state => state.friendsPageUserFriends.loading);

    this.friends$ = this.store.select(state => state.friendsPageUserFriends.friends);

    this.activatedRoute.queryParams.subscribe(params => {
      this.userSearchingActivated = params.userSearchingActivated != null;
    })
  }

  searchFriends(searchTerm) {
    if(searchTerm.length === 0){
      this.userSearchingActivated = false;
    } else {
      this.userSearchingActivated = true;
      this.store.dispatch(new UserFriendsActions.FilterFriends({keyword: searchTerm}));
    }
  }

  advSearchSubmit(data){
    this.userSearchingActivated = true;

    this.friendsPageService.getUsersByCriteria(data.value).subscribe(response => {
      //console.log(response);
      this.foundUsers = response.body;
    });
  }

  ngOnDestroy(): void {

  }
}
