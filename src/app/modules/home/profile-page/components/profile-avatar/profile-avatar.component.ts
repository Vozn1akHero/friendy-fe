import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as UserAvatarActions from '../../store/user-avatar/user-avatar.actions';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {ProfilePageModalsService} from '../../services/profile-page-modals.service';

@Component({
  selector: 'app-profile-avatar',
  templateUrl: './profile-avatar.component.html',
  styleUrls: ['./profile-avatar.component.scss']
})
export class ProfileAvatarComponent implements OnInit, OnDestroy {
  @Input() userId: number;
  @Input() activeSettings: boolean;
  @Input() isUserProfileOwner : boolean;

  newAvatarModalOpened: boolean = false;
  newAvatarSrc: string;

  userAvatarUrl: string;
  userAvatarLoaded$: Observable<boolean>;
  userAvatarSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private profilePageModalsService: ProfilePageModalsService) { }

  ngOnInit() {
    this.getUserAvatar();
  }

  getUserAvatar() {
    this.userAvatarLoaded$ = this.store.select(state => state.profilePageUserAvatar.loaded);
    this.store.dispatch(new UserAvatarActions.GetUserAvatar({userId:this.userId}));
    this.userAvatarSubscription = this.store
      .select(state => state.profilePageUserAvatar.avatarUrl)
      .subscribe(userAvatarUrl => {
        this.userAvatarUrl = userAvatarUrl;
      })
  }

  showNewAvatarModal(e){
    if(e.srcElement.files && e.srcElement.files[0]) {
      this.profilePageModalsService.newAvatar = e.srcElement.files[0];
      this.profilePageModalsService.newAvatarModalOpened = true;
    }
  }

  ngOnDestroy(): void {
    this.userAvatarSubscription.unsubscribe();
  }
}
