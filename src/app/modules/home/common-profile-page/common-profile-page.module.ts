import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonProfilePageComponent } from './common-profile-page.component';
import { CommonProfileHeaderComponent } from './components/common-profile-header/common-profile-header.component';
import { CommonProfilePostItemComponent } from './components/common-profile-post-item/common-profile-post-item.component';
import { CommonProfileFriendsComponent } from './components/common-profile-friends/common-profile-friends.component';
import { CommonProfilePhotosComponent } from './components/common-profile-photos/common-profile-photos.component';
import { CommonProfileFriendsItemComponent } from './components/common-profile-friends/common-profile-friends-item/common-profile-friends-item.component';
import { CommonProfilePhotosItemComponent } from './components/common-profile-photos/common-profile-photos-item/common-profile-photos-item.component';

import { SharedModule } from '../../../shared/shared.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CommonProfilePageComponent,
    CommonProfileHeaderComponent,
    CommonProfilePostItemComponent,
    CommonProfileFriendsComponent,
    CommonProfilePhotosComponent,
    CommonProfileFriendsItemComponent,
    CommonProfilePhotosItemComponent,
  ]
})


export class CommonProfilePageModule { }
