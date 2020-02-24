import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProfilePageModalsService} from '../../../services/profile-page-modals.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile-avatar',
  templateUrl: './profile-avatar.component.html',
  styleUrls: ['./profile-avatar.component.scss']
})
export class ProfileAvatarComponent implements OnInit, OnDestroy {
  @Input() userId: number;
  @Input() activeSettings: boolean;
  @Input() isUserProfileOwner : boolean;
  @Input() avatarUrl: string;
  @Input() isUserOnline: boolean;
  @Input() userDataLoaded$: Observable<boolean>;

  newAvatarModalOpened: boolean = false;

  constructor(private profilePageModalsService: ProfilePageModalsService) { }

  ngOnInit() {}

  showNewAvatarModal(e){
    if(e.srcElement.files && e.srcElement.files[0]) {
      this.profilePageModalsService.newAvatar = e.srcElement.files[0];
      this.profilePageModalsService.newAvatarModalOpened = true;
    }
  }

  ngOnDestroy(): void {
  }
}
