import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProfilePageModule} from './home/profile-page/profile-page.module';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import {NotFoundPageComponent} from './not-found/not-found-page.component';
import {FriendsPageModule} from './home/friends-page/friends-page.module';
import {EventsPageModule} from './home/events-page/events-page.module';
import {EventPageModule} from './home/event-page/event-page.module';
import {DialogPageModule} from './home/dialog-page/dialog-page.module';
import {WrapperModule} from './wrapper/wrapper.module';
import {EventSettingsPageModule} from './home/event-settings-page/event-settings-page.module';
import {UserSettingsPageModule} from './home/user-settings-page/user-settings-page.module';
import {SharedModulesModule} from './shared/shared-modules.module';
import {PhotosPageModule} from './home/photos-page/photos-page.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedModulesModule,
    ProfilePageModule,
    FriendsPageModule,
    LayoutModule,
    EventsPageModule,
    EventPageModule,
    DialogPageModule,
    WrapperModule,
    EventSettingsPageModule,
    UserSettingsPageModule,
    PhotosPageModule
  ],
  declarations: [
    NotFoundPageComponent
  ]
})
export class ModulesModule { }
