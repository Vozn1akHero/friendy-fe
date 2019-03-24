import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { JoinupPopupComponent } from './components/joinup-popup/joinup-popup.component';
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
    MiniSearchInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
