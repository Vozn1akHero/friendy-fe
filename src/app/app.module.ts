import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LoginPopupComponent } from './auth/login-popup/login-popup.component';
import { JoinupPopupComponent } from './auth/joinup-popup/joinup-popup.component';
import { WholenessComponent } from './components/inside/wholeness/wholeness.component';
import { ProfileComponent } from './components/inside/profile/profile.component';
import { FriendsComponent } from './components/inside/friends/friends.component';
import { MessagesComponent } from './components/inside/messages/messages.component';
import { EventsComponent } from './components/inside/events/events.component';
import { GroupsComponent } from './components/inside/groups/groups.component';
import { HomeComponent } from './components/inside/home/home.component';
import { MessageComponent } from './components/inside/messages/message/message.component';
import { DialogComponent } from './components/inside/messages/dialog/dialog.component';
import { ChatComponent } from './components/inside/messages/dialog/chat/chat.component';
import { NewMessageComponent } from './components/inside/messages/dialog/new-message/new-message.component';
import { ChatFriendDataComponent } from './components/inside/messages/dialog/chat-friend-data/chat-friend-data.component';
import { ChatsInDialogComponent } from './components/inside/messages/dialog/chats-in-dialog/chats-in-dialog.component';
import { SortMessagesPanelComponent } from './components/inside/messages/sort-messages-panel/sort-messages-panel.component';
import { NewMessagePanelComponent } from './components/inside/messages/new-message-panel/new-message-panel.component';
import { FriendsSearchComponent } from './components/inside/friends/friends-search/friends-search.component';
import { FriendsListComponent } from './components/inside/friends/friends-list/friends-list.component';
import { SuggestedFriendsComponent } from './components/inside/friends/suggested-friends/suggested-friends.component';
import { FriendsAdvSearchComponent } from './components/inside/friends/friends-adv-search/friends-adv-search.component';
import { ProfileHeaderComponent } from './components/inside/profile/profile-header/profile-header.component';
import { ProfileMainContentComponent } from './components/inside/profile/profile-main-content/profile-main-content.component';
import { ProfileNewPostComponent } from './components/inside/profile/profile-main-content/profile-new-post/profile-new-post.component';
import { EventsListComponent } from './components/inside/events/events-list/events-list.component';
import { EventsListControlsComponent } from './components/inside/events/events-list/events-list-controls/events-list-controls.component';
import { EventsAllComponent } from './components/inside/events/events-list/events-all/events-all.component';
import { EventsAllItemComponent } from './components/inside/events/events-list/events-all/events-all-item/events-all-item.component';
import { EventsMineSearchComponent } from './components/inside/events/events-list/events-mine-search/events-mine-search.component';
import { NewEventBtnComponent } from './components/inside/events/new-event-btn/new-event-btn.component';
import { SearchEventsComponent } from './components/inside/events/search-events/search-events.component';
import { SuggestedEventsComponent } from './components/inside/events/search-events/suggested-events/suggested-events.component';
import { SearchEventsControlComponent } from './components/inside/events/search-events/search-events-control/search-events-control.component';
import { FooterComponent } from './components/inside/wholeness/footer/footer.component';
import { EventCreationComponent } from './components/inside/events/event-creation/event-creation.component';
import { CommentsComponent } from './components/shared/comments/comments.component';
import { GroupCreationComponent } from './components/inside/groups/group-creation/group-creation.component';
import { GroupsListComponent } from './components/inside/groups/groups-list/groups-list.component';
import { NewGroupBtnComponent } from './components/inside/groups/new-group-btn/new-group-btn.component';
import { SearchGroupsComponent } from './components/inside/groups/search-groups/search-groups.component';
import { NewMessageFormComponent } from './components/shared/new-message-form/new-message-form.component';
import { ProfilePostItemComponent } from './components/inside/profile/profile-main-content/profile-post-item/profile-post-item.component';
import { ProfileFriendsComponent } from './components/inside/profile/profile-main-content/profile-friends/profile-friends.component';
import { ProfilePhotosComponent } from './components/inside/profile/profile-main-content/profile-photos/profile-photos.component';
import { UserSettingsComponent } from './components/inside/user-settings/user-settings.component';
import { GroupsAllComponent } from './components/inside/groups/groups-list/groups-all/groups-all.component';
import { GroupsListControlsComponent } from './components/inside/groups/groups-list/groups-list-controls/groups-list-controls.component';
import { GroupsMineSearchComponent } from './components/inside/groups/groups-list/groups-mine-search/groups-mine-search.component';
import { GroupsAllItemComponent } from './components/inside/groups/groups-list/groups-all/groups-all-item/groups-all-item.component';
import { SearchGroupsControlComponent } from './components/inside/groups/search-groups/search-groups-control/search-groups-control.component';
import { SuggestedGroupsComponent } from './components/inside/groups/search-groups/suggested-groups/suggested-groups.component';
import { SuggestedGroupsItemComponent } from './components/inside/groups/search-groups/suggested-groups/suggested-groups-item/suggested-groups-item.component';
import { FriendsListItemComponent } from './components/inside/friends/friends-list/friends-list-item/friends-list-item.component';
import { FriendsSearchControlComponent } from './components/inside/friends/friends-search/friends-search-control/friends-search-control.component';
import { SearchInputComponent } from './components/shared/search-input/search-input.component';
import { MiniSearchInputComponent } from './components/shared/mini-search-input/mini-search-input.component';
import { HomeRecordItemComponent } from './components/inside/home/home-record-item/home-record-item.component';
import { HomeUpcomingEventsComponent } from './components/inside/home/home-upcoming-events/home-upcoming-events.component';
import { HomeStatsComponent } from './components/inside/home/home-stats/home-stats.component';
import { HomeUpcomingEventsItemComponent } from './components/inside/home/home-upcoming-events/home-upcoming-events-item/home-upcoming-events-item.component';
import { ProfileHeaderBgComponent } from './components/inside/profile/profile-header/profile-header-bg/profile-header-bg.component';
import { ProfileHeaderBgAlterComponent } from './components/inside/profile/profile-header/profile-header-bg/profile-header-bg-alter/profile-header-bg-alter.component';
import { ProfileHeaderUserinfoComponent } from './components/inside/profile/profile-header/profile-header-userinfo/profile-header-userinfo.component';
import { ProfileSettingsComponent } from './components/inside/profile/profile-header/profile-header-userinfo/profile-settings/profile-settings.component';
import { ProfileAvatarComponent } from './components/inside/profile/profile-header/profile-header-userinfo/profile-avatar/profile-avatar.component';
import { ProfileAvatarAlterComponent } from './components/inside/profile/profile-header/profile-header-userinfo/profile-avatar/profile-avatar-alter/profile-avatar-alter.component';
import { ProfileUserinfoBasicComponent } from './components/inside/profile/profile-header/profile-header-userinfo/profile-userinfo-basic/profile-userinfo-basic.component';
import { ProfileFriendsItemComponent } from './components/inside/profile/profile-main-content/profile-friends/profile-friends-item/profile-friends-item.component';
import { MainPanelComponent } from './components/shared/main-panel/main-panel.component';
import { ProfilePhotosItemComponent } from './components/inside/profile/profile-main-content/profile-photos/profile-photos-item/profile-photos-item.component';
import { SuggestedFriendsItemComponent } from './components/inside/friends/suggested-friends/suggested-friends-item/suggested-friends-item.component';
import { FriendsAdvSearchFormComponent } from './components/inside/friends/friends-adv-search/friends-adv-search-form/friends-adv-search-form.component';
import { SuggestedEventsItemComponent } from './components/inside/events/search-events/suggested-events/suggested-events-item/suggested-events-item.component';
import { NewCommentFormComponent } from './components/shared/comments/new-comment-form/new-comment-form.component';
import { FriendMessagesComponent } from './components/inside/messages/dialog/chat/friend-messages/friend-messages.component';
import { UserMessagesComponent } from './components/inside/messages/dialog/chat/user-messages/user-messages.component';
import { MessageInChatComponent } from './components/inside/messages/dialog/chat/message-in-chat/message-in-chat.component';
import { FriendInChatsInDialogComponent } from './components/inside/messages/dialog/chats-in-dialog/friend-in-chats-in-dialog/friend-in-chats-in-dialog.component';
import { EventComponent } from './components/inside/event/event.component';
import { EventHeaderBgComponent } from './components/inside/event/event-header/event-header-bg/event-header-bg.component';
import { EventHeaderEventinfoComponent } from './components/inside/event/event-header/event-header-eventinfo/event-header-eventinfo.component';
import { EventMainContentComponent } from './components/inside/event/event-main-content/event-main-content.component';
import { EventParticipantsComponent } from './components/inside/event/event-main-content/event-participants/event-participants.component';
import { EventPhotosComponent } from './components/inside/event/event-main-content/event-photos/event-photos.component';
import { EventNewPostComponent } from './components/inside/event/event-main-content/event-new-post/event-new-post.component';
import { EventAvatarComponent } from './components/inside/event/event-header/event-header-eventinfo/event-avatar/event-avatar.component';
import { EventEventinfoBasicComponent } from './components/inside/event/event-header/event-header-eventinfo/event-eventinfo-basic/event-eventinfo-basic.component';
import { EventPostItemComponent } from './components/inside/event/event-main-content/event-post-item/event-post-item.component';
import { EventParticipantsItemComponent } from './components/inside/event/event-main-content/event-participants/event-participants-item/event-participants-item.component';
import { EventPhotosItemComponent } from './components/inside/event/event-main-content/event-photos/event-photos-item/event-photos-item.component';
import { EventHeaderBgAlterComponent } from './components/inside/event/event-header/event-header-bg/event-header-bg-alter/event-header-bg-alter.component';
import { EventPageSettingsComponent } from './components/inside/event/event-header/event-header-eventinfo/event-page-settings/event-page-settings.component';
import { EventAvatarAlterComponent } from './components/inside/event/event-header/event-header-eventinfo/event-avatar/event-avatar-alter/event-avatar-alter.component';
import { EventPageSettingsControlsComponent } from './components/inside/event/event-header/event-header-eventinfo/event-page-settings/event-page-settings-controls/event-page-settings-controls.component';




@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginPopupComponent,
    JoinupPopupComponent,
    WholenessComponent,
    ProfileComponent,
    FriendsComponent,
    MessagesComponent,
    EventsComponent,
    GroupsComponent,
    HomeComponent,
    MessageComponent,
    DialogComponent,
    ChatComponent,
    NewMessageComponent,
    ChatFriendDataComponent,
    ChatsInDialogComponent,
    SortMessagesPanelComponent,
    NewMessagePanelComponent,
    FriendsSearchComponent,
    FriendsListComponent,
    SuggestedFriendsComponent,
    FriendsAdvSearchComponent,
    ProfileHeaderComponent,
    ProfileMainContentComponent,
    ProfileNewPostComponent,
    EventsListComponent,
    EventsListControlsComponent,
    EventsAllComponent,
    EventsAllItemComponent,
    EventsMineSearchComponent,
    NewEventBtnComponent,
    SearchEventsComponent,
    SuggestedEventsComponent,
    SearchEventsControlComponent,
    FooterComponent,
    EventCreationComponent,
    CommentsComponent,
    GroupCreationComponent,
    GroupsListComponent,
    NewGroupBtnComponent,
    SearchGroupsComponent,
    NewMessageFormComponent,
    ProfilePostItemComponent,
    ProfileFriendsComponent,
    ProfilePhotosComponent,
    UserSettingsComponent,
    GroupsAllComponent,
    GroupsListControlsComponent,
    GroupsMineSearchComponent,
    GroupsAllItemComponent,
    SearchGroupsControlComponent,
    SuggestedGroupsComponent,
    SuggestedGroupsItemComponent,
    FriendsListItemComponent,
    FriendsSearchControlComponent,
    SearchInputComponent,
    MiniSearchInputComponent,
    HomeRecordItemComponent,
    HomeUpcomingEventsComponent,
    HomeStatsComponent,
    HomeUpcomingEventsItemComponent,
    ProfileHeaderBgComponent,
    ProfileHeaderBgAlterComponent,
    ProfileHeaderUserinfoComponent,
    ProfileSettingsComponent,
    ProfileAvatarComponent,
    ProfileAvatarAlterComponent,
    ProfileUserinfoBasicComponent,
    ProfileFriendsItemComponent,
    MainPanelComponent,
    ProfilePhotosItemComponent,
    SuggestedFriendsItemComponent,
    FriendsAdvSearchFormComponent,
    SuggestedEventsItemComponent,
    NewCommentFormComponent,
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
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
