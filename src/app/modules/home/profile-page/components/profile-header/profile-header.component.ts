import {Component, OnInit, Input, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';
import User from '../../models/user.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import * as UserDataActions from '../../store/user-data/user-data.actions';

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
  userDataLoaded: boolean;
  userDataSubscription: Subscription;

  isUserOnline: boolean;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    this.store.dispatch(new UserDataActions.GetUserData({ id: this.userId }));

    this.userDataSubscription = this.store
      .select(state => state.profilePageUserData.profiles)
      .subscribe(userData => {
        const data = userData[this.userId];
        if(data){
          this.userDataLoaded = true;
          this.userData = userData[this.userId];
          this.isUserOnline = userData[this.userId].session.sessionEnd == null;
        }
      });
  }

  toggleActiveSettings(value: boolean){
    this.activeSettings = value;
  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
  }
}
