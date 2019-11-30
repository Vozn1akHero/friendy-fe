import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProfilePageModule} from './home/profile-page/profile-page.module';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import {CommonProfilePageModule} from './home/common-profile-page/common-profile-page.module';
import {NotFoundPageComponent} from './not-found/not-found-page.component';
import {FriendsPageModule} from './home/friends-page/friends-page.module';
import {EventsPageModule} from './home/events-page/events-page.module';
import { PhotosPageComponent } from './home/photos-page/photos-page.component';
import {EventPageModule} from './home/event-page/event-page.module';
import {DialogPageModule} from './home/dialog-page/dialog-page.module';
import {FriendsSearchPageModule} from './home/friends-search-page/friends-search-page.module';
import {WrapperModule} from './wrapper/wrapper.module';
import { PhotosComponent } from './home/photos-page/components/photos/photos.component';
import { PhotosItemComponent } from './home/photos-page/components/photos/photos-item/photos-item.component';
import { PhotosPageHeaderComponent } from './home/photos-page/components/photos-page-header/photos-page-header.component';
import { NewPhotoFormComponent } from './home/photos-page/components/photos-page-header/new-photo-form/new-photo-form.component';
import { BaseDataPanelComponent } from './home/photos-page/components/photos-page-header/base-data-panel/base-data-panel.component';
import {EventSettingsPageModule} from './home/event-settings-page/event-settings-page.module';
import { SettingsPanelWrapperComponent } from '../shared/components/settings-panel-wrapper/settings-panel-wrapper.component';
import {UserSettingsPageModule} from './home/user-settings-page/user-settings-page.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfilePageModule,
    CommonProfilePageModule,
    FriendsPageModule,
    LayoutModule,
    EventsPageModule,
    EventPageModule,
    DialogPageModule,
    WrapperModule,
    EventSettingsPageModule,
    FriendsSearchPageModule,
    UserSettingsPageModule
  ],
  declarations: [
    NotFoundPageComponent,
    PhotosPageComponent,
    PhotosComponent,
    PhotosItemComponent,
    PhotosPageHeaderComponent,
    NewPhotoFormComponent,
    BaseDataPanelComponent
  ],
  exports: [
    SettingsPanelWrapperComponent

  ]
})


export class ModulesModule { }
