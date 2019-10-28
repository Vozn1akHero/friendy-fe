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
    DialogPageModule
  ],
  declarations: [
    NotFoundPageComponent,
    PhotosPageComponent
  ],
  exports: [

  ]
})


export class ModulesModule { }
