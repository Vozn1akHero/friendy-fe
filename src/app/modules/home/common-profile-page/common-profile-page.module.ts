import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonProfilePageComponent } from './common-profile-page.component';
import { CommonProfileHeaderComponent } from './components/common-profile-header/common-profile-header.component';
import { CommonProfileMainContentComponent } from './components/common-profile-main-content/common-profile-main-content.component';
import { CommonProfilePostItemComponent } from './components/common-profile-main-content/common-profile-post-item/common-profile-post-item.component';
import { CommonProfileFriendsComponent } from './components/common-profile-main-content/common-profile-friends/common-profile-friends.component';
import { CommonProfilePhotosComponent } from './components/common-profile-main-content/common-profile-photos/common-profile-photos.component';
import { CommonProfileFriendsItemComponent } from './components/common-profile-main-content/common-profile-friends/common-profile-friends-item/common-profile-friends-item.component';
import { CommonProfilePhotosItemComponent } from './components/common-profile-main-content/common-profile-photos/common-profile-photos-item/common-profile-photos-item.component';

import { SharedModule } from '../../../shared/shared.module';
import { AppRoutingModule } from '../../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    CommonProfilePageComponent,
    CommonProfileHeaderComponent,
    CommonProfileMainContentComponent,
    CommonProfilePostItemComponent,
    CommonProfileFriendsComponent,
    CommonProfilePhotosComponent,
    CommonProfileFriendsItemComponent,
    CommonProfilePhotosItemComponent,
  ]
})


export class CommonProfilePageModule { }
