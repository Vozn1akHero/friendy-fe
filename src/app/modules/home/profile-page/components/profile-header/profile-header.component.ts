import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import User from '../../models/user.model';
import UserAvatar from '../../models/user-avatar.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import * as UserAvatarActions from '../../store/user-avatar/user-avatar.actions';
import * as UserDataActions from '../../store/user-data/user-data.actions';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit, OnDestroy {
  @Input() activeSettings: boolean;
  //@Input() userData$ : Observable<User>;
  //@Input() userData : User;
  //@Input() userAvatar : UserAvatar;

  @ViewChild('userStatus') userStatus: ElementRef;
  @ViewChild('changedProfileBg') changedProfileBg: ElementRef;
  @ViewChild('changedProfileAvatar') changedProfileAvatar: ElementRef;

  userData: User;
  userDataLoaded$: Observable<boolean>;
  userDataSubscription: Subscription;

  userAvatar: UserAvatar;
  userAvatarLoaded$: Observable<boolean>;
  userAvatarSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.getUserData();
    this.getUserAvatar();
  }

/*  changeUserAvatar(e){
    e.preventDefault();

    let value = this.changedProfileAvatar.nativeElement.value.replace('/', '\'');

    this.imageService.uploadFiles(this.changedProfileAvatar.nativeElement.value, (result) => {
      console.log(result);
    });
  }*/
  changeUserAvatar(e){
    e.preventDefault();
  }

  getUserData(){
    this.userDataLoaded$ = this.store.select(state => state.profilePageUserData.loaded);
    this.store.dispatch(new UserDataActions.GetUserData());
    this.userDataSubscription = this.store
      .select(state => state.profilePageUserData.user)
      .subscribe(userData => {
        this.userData = userData;
      });
  }

  getUserAvatar() {
    this.userAvatarLoaded$ = this.store.select(state => state.profilePageUserAvatar.loaded);
    this.store.dispatch(new UserAvatarActions.GetUserAvatar());
    this.userAvatarSubscription = this.store
      .select(state => state.profilePageUserAvatar.avatar)
      .subscribe(userAvatar => {
        this.userAvatar = userAvatar;
      })
  }

  openProfileInnerSettingsChild() {
    this.activeSettings = !this.activeSettings;
  }

  changeUserData() {
    console.log(this.userStatus, this.changedProfileAvatar, this.changedProfileBg);
  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
    this.userAvatarSubscription.unsubscribe();
  }
}
