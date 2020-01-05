import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';
import User from '../../models/user.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import * as UserDataActions from '../../store/user-data/user-data.actions';
import {UserStatusService} from '../../services/user-status.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit, OnDestroy {
  @Input() activeSettings: boolean;
  @Input() isUserProfileOwner : boolean;
  @Input() userId: number;

  @ViewChild('userStatus') userStatus: ElementRef;
  @ViewChild('changedProfileBg') changedProfileBg: ElementRef;
  @ViewChild('changedProfileAvatar') changedProfileAvatar: ElementRef;

  userData: User;
  userDataLoaded$: Observable<boolean>;
  userDataSubscription: Subscription;

  isUserOnline: boolean;

  constructor(private store: Store<fromApp.AppState>,
              private userStatusService : UserStatusService) {}

  ngOnInit() {
    this.getUserData();
    this.getUserStatus();
  }

  getUserData(){
    this.userDataLoaded$ = this.store.select(state => state.profilePageUserData.loaded);
    this.store.dispatch(new UserDataActions.GetUserData({ id: this.userId }));

    this.userDataSubscription = this.store
      .select(state => state.profilePageUserData.profiles)
      .subscribe(userData => {
        this.userData = userData[this.userId];
      });
  }

  getUserStatus(){
    this.userStatusService.get(this.userId).subscribe((value:any) => {
      this.isUserOnline = value.body.status as boolean;
    })
  }

  toggleActiveSettings(value: boolean){
    this.activeSettings = value;
  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
  }
}
