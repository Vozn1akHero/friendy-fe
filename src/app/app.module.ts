import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './modules/mainpage/mainpage.component';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { JoinupPageComponent } from './modules/auth/joinup-page/joinup-page.component';

import { MessagesPageComponent } from './modules/home/messages-page/messages-page.component';

import { GroupsPageComponent } from './modules/home/groups-page/groups-page.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { MessageComponent } from './modules/home/messages-page/message/message.component';
import { DialogComponent } from './modules/home/messages-page/dialog/dialog.component';
import { ChatComponent } from './modules/home/messages-page/dialog/chat/chat.component';
import { NewMessageComponent } from './modules/home/messages-page/dialog/new-message/new-message.component';
import { ChatFriendDataComponent } from './modules/home/messages-page/dialog/chat-friend-data/chat-friend-data.component';
import { ChatsInDialogComponent } from './modules/home/messages-page/dialog/chats-in-dialog/chats-in-dialog.component';
import { SortMessagesPanelComponent } from './modules/home/messages-page/sort-messages-panel/sort-messages-panel.component';
import { NewMessagePanelComponent } from './modules/home/messages-page/new-message-panel/new-message-panel.component';




import { GroupCreationComponent } from './modules/home/groups-page/group-creation/group-creation.component';
import { GroupsListComponent } from './modules/home/groups-page/groups-list/groups-list.component';
import { NewGroupBtnComponent } from './modules/home/groups-page/new-group-btn/new-group-btn.component';
import { SearchGroupsComponent } from './modules/home/groups-page/search-groups/search-groups.component';


import { UserSettingsPageComponent } from './modules/home/user-settings-page/user-settings-page.component';
import { GroupsAllComponent } from './modules/home/groups-page/groups-list/groups-all/groups-all.component';
import { GroupsListControlsComponent } from './modules/home/groups-page/groups-list/groups-list-controls/groups-list-controls.component';
import { GroupsMineSearchComponent } from './modules/home/groups-page/groups-list/groups-mine-search/groups-mine-search.component';
import { GroupsAllItemComponent } from './modules/home/groups-page/groups-list/groups-all/groups-all-item/groups-all-item.component';
import { SearchGroupsControlComponent } from './modules/home/groups-page/search-groups/search-groups-control/search-groups-control.component';
import { SuggestedGroupsComponent } from './modules/home/groups-page/search-groups/suggested-groups/suggested-groups.component';
import { SuggestedGroupsItemComponent } from './modules/home/groups-page/search-groups/suggested-groups/suggested-groups-item/suggested-groups-item.component';


import { HomeRecordItemComponent } from './modules/home/home-page/home-record-item/home-record-item.component';
import { HomeUpcomingEventsComponent } from './modules/home/home-page/home-upcoming-events/home-upcoming-events.component';
import { HomeStatsComponent } from './modules/home/home-page/home-stats/home-stats.component';
import { HomeUpcomingEventsItemComponent } from './modules/home/home-page/home-upcoming-events/home-upcoming-events-item/home-upcoming-events-item.component';




import { FriendMessagesComponent } from './modules/home/messages-page/dialog/chat/friend-messages/friend-messages.component';
import { UserMessagesComponent } from './modules/home/messages-page/dialog/chat/user-messages/user-messages.component';
import { MessageInChatComponent } from './modules/home/messages-page/dialog/chat/message-in-chat/message-in-chat.component';
import { FriendInChatsInDialogComponent } from './modules/home/messages-page/dialog/chats-in-dialog/friend-in-chats-in-dialog/friend-in-chats-in-dialog.component';
import { EventComponent } from './modules/home/event-page/event-page.component';
import { EventHeaderBgComponent } from './modules/home/event-page/event-header/event-header-bg/event-header-bg.component';
import { EventHeaderEventinfoComponent } from './modules/home/event-page/event-header/event-header-eventinfo/event-header-eventinfo.component';
import { EventMainContentComponent } from './modules/home/event-page/event-main-content/event-main-content.component';
import { EventParticipantsComponent } from './modules/home/event-page/event-main-content/event-participants/event-participants.component';
import { EventPhotosComponent } from './modules/home/event-page/event-main-content/event-photos/event-photos.component';
import { EventNewPostComponent } from './modules/home/event-page/event-main-content/event-new-post/event-new-post.component';
import { EventAvatarComponent } from './modules/home/event-page/event-header/event-header-eventinfo/event-avatar/event-avatar.component';
import { EventEventinfoBasicComponent } from './modules/home/event-page/event-header/event-header-eventinfo/event-eventinfo-basic/event-eventinfo-basic.component';
import { EventPostItemComponent } from './modules/home/event-page/event-main-content/event-post-item/event-post-item.component';
import { EventParticipantsItemComponent } from './modules/home/event-page/event-main-content/event-participants/event-participants-item/event-participants-item.component';
import { EventPhotosItemComponent } from './modules/home/event-page/event-main-content/event-photos/event-photos-item/event-photos-item.component';
import { EventHeaderBgAlterComponent } from './modules/home/event-page/event-header/event-header-bg/event-header-bg-alter/event-header-bg-alter.component';
import { EventPageSettingsComponent } from './modules/home/event-page/event-header/event-header-eventinfo/event-page-settings/event-page-settings.component';
import { EventAvatarAlterComponent } from './modules/home/event-page/event-header/event-header-eventinfo/event-avatar/event-avatar-alter/event-avatar-alter.component';
import { EventPageSettingsControlsComponent } from './modules/home/event-page/event-header/event-header-eventinfo/event-page-settings/event-page-settings-controls/event-page-settings-controls.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RegistrationSuccessPopUpComponent} from './modules/auth/joinup-page/registration-success-pop-up/registration-success-pop-up.component';
import {TokenInterceptor} from './shared/services/token-interceptor.service';
import {Store, StoreModule} from '@ngrx/store';
import * as fromApp from './core/ngrx/store/app.reducer';
import { environment } from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './core/ngrx/user/user.effects';
import {SharedModule} from './shared/shared.module';
import {ModulesModule} from './modules/modules.module';
import {ProfilePageModule} from './modules/home/profile-page/profile-page.module';
import {UserDataEffects} from './modules/home/common-profile-page/store/user-data/user-data.effects';


import * as UserPostsActions from './modules/home/profile-page/store/user-posts/user-posts.actions';
import * as UserActions from './core/ngrx/user/user.actions';
import {UserPostsEffects} from './modules/home/profile-page/store/user-posts/user-posts.effects';
import {EventHeaderComponent} from './modules/home/event-page/event-header/event-header.component';
import {UserFriendsEffects} from './modules/home/friends-page/store/user-friends/friends-page.effects';
import {UserEventsEffects} from './modules/home/events-page/store/user-events/user-events.effects';




@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginPageComponent,
    JoinupPageComponent,

    MessagesPageComponent,
    GroupsPageComponent,
    HomePageComponent,
    MessageComponent,
    DialogComponent,
    ChatComponent,
    NewMessageComponent,
    ChatFriendDataComponent,
    ChatsInDialogComponent,
    SortMessagesPanelComponent,
    NewMessagePanelComponent,


    RegistrationSuccessPopUpComponent,

    GroupCreationComponent,
    GroupsListComponent,
    NewGroupBtnComponent,
    SearchGroupsComponent,
    EventHeaderComponent,
    UserSettingsPageComponent,
    GroupsAllComponent,
    GroupsListControlsComponent,
    GroupsMineSearchComponent,
    GroupsAllItemComponent,
    SearchGroupsControlComponent,
    SuggestedGroupsComponent,
    SuggestedGroupsItemComponent,


    HomeRecordItemComponent,
    HomeUpcomingEventsComponent,
    HomeStatsComponent,
    HomeUpcomingEventsItemComponent,


    FriendMessagesComponent,
    UserMessagesComponent,
    MessageInChatComponent,
    FriendInChatsInDialogComponent,
    EventComponent,
    EventHeaderBgComponent,
    EventHeaderEventinfoComponent,
    EventMainContentComponent,
    EventParticipantsComponent,
    EventPhotosComponent,
    EventNewPostComponent,
    EventAvatarComponent,
    EventEventinfoBasicComponent,
    EventPostItemComponent,
    EventParticipantsItemComponent,
    EventPhotosItemComponent,
    EventHeaderBgAlterComponent,
    EventPageSettingsComponent,
    EventAvatarAlterComponent,
    EventPageSettingsControlsComponent
  ],
  imports: [
    ProfilePageModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModulesModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([
      UserEffects,
      UserDataEffects,
      UserPostsEffects,
      UserFriendsEffects,
      UserEventsEffects
    ]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

  }
}
