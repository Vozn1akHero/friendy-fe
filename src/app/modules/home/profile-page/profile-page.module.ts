import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageComponent } from './profile-page.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileNewPostComponent } from './components/profile-new-post/profile-new-post.component';
import { ProfilePostItemComponent } from './components/profile-post-list/profile-post-item/profile-post-item.component';
import { ProfileFriendsComponent } from './components/profile-friends/profile-friends.component';
import { ProfilePhotosComponent } from './components/profile-photos/profile-photos.component';
import { ProfileFriendsItemComponent } from './components/profile-friends/profile-friends-item/profile-friends-item.component';
import { ProfilePhotosItemComponent } from './components/profile-photos/profile-photos-item/profile-photos-item.component';

import { SharedModule } from '../../../shared/shared.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { ProfilePostListComponent } from './components/profile-post-list/profile-post-list.component';
import {ProfileBelongingResolver} from './resolvers/profile-belonging.resolver';
import { NewAvatarModalComponent } from './components/new-avatar-modal/new-avatar-modal.component';
import { ProfileAvatarComponent } from './components/profile-avatar/profile-avatar.component';
import { ProfileBackgroundComponent } from './components/profile-background/profile-background.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    ProfilePageComponent,
    ProfileHeaderComponent,
    ProfileNewPostComponent,
    ProfilePostItemComponent,
    ProfileFriendsComponent,
    ProfilePhotosComponent,
    ProfileFriendsItemComponent,
    ProfilePhotosItemComponent,
    ProfilePostListComponent,
    ProfilePostListComponent,
    NewAvatarModalComponent,
    ProfileAvatarComponent,
    ProfileBackgroundComponent
  ],
  providers: [
    ProfileBelongingResolver
  ]
})


export class ProfilePageModule { }
