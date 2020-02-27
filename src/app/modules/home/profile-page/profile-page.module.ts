import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageComponent } from './profile-page.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileNewPostComponent } from './components/profile-new-post/profile-new-post.component';
import { ProfileExemplaryFriendsPanelComponent } from './components/profile-exemplary-friends-panel/profile-exemplary-friends-panel.component';
import { ProfileExemplaryPhotosPanelComponent } from './components/profile-exemplary-photos-panel/profile-exemplary-photos-panel.component';
import { ProfileExemplaryFriendComponent } from './components/profile-exemplary-friends-panel/profile-exemplary-friend/profile-exemplary-friend.component';
import { ProfilePhotosItemComponent } from './components/profile-exemplary-photos-panel/profile-photos-item/profile-photos-item.component';
import { SharedModule } from '../../../shared/shared.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { ProfilePostListComponent } from './components/profile-post-list/profile-post-list.component';
import {ProfileBelongingResolver} from './resolvers/profile-belonging.resolver';
import { NewAvatarModalComponent } from './components/new-avatar-modal/new-avatar-modal.component';
import { ProfileAvatarComponent } from './components/profile-header/profile-avatar/profile-avatar.component';
import { ProfileBackgroundComponent } from './components/profile-header/profile-background/profile-background.component';
import { ProfileHeaderFriendshipControlsComponent } from './components/profile-header/profile-header-friendship-controls/profile-header-friendship-controls.component';
import { ProfileHeaderSettingsComponent } from './components/profile-header/profile-header-settings/profile-header-settings.component';
import {ProfileHeaderBasicDataComponent} from './components/profile-header/profile-header-basic-data/profile-header-basic-data.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {PostModule} from '../../shared/post/post.module';

@NgModule({
  imports: [
    InfiniteScrollModule,
    CommonModule,
    SharedModule,
    PostModule,
    AppRoutingModule
  ],
  declarations: [
    ProfilePageComponent,
    ProfileHeaderComponent,
    ProfileNewPostComponent,
    ProfileExemplaryFriendsPanelComponent,
    ProfileExemplaryPhotosPanelComponent,
    ProfileExemplaryFriendComponent,
    ProfilePhotosItemComponent,
    ProfilePostListComponent,
    ProfilePostListComponent,
    NewAvatarModalComponent,
    ProfileAvatarComponent,
    ProfileBackgroundComponent,
    ProfileHeaderFriendshipControlsComponent,
    ProfileHeaderBasicDataComponent,
    ProfileHeaderSettingsComponent
  ],
  providers: [
    ProfileBelongingResolver
  ]
})

export class ProfilePageModule { }
