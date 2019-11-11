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
    ProfilePostListComponent
  ],
  providers: [
    ProfileBelongingResolver
  ]
})


export class ProfilePageModule { }
