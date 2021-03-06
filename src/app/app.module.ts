import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import * as fromApp from "./core/ngrx/store/app.reducer";
import { LoggedInResolver } from "./logged-in.resolver";
import { RegistrationSuccessPopUpComponent } from "./modules/auth/joinup-page/components/registration-success-pop-up/registration-success-pop-up.component";
import { JoinUpPageComponent } from "./modules/auth/joinup-page/joinup-page.component";
import { LoginPageComponent } from "./modules/auth/login-page/login-page.component";
import { ContactsEffects } from "./modules/home/dialog-page/store/contacts/contacts.effects";
import { DialogListEffects } from "./modules/home/dialog-page/store/dialog-list/dialog-list.effects";
import { DialogMessagesEffects } from "./modules/home/dialog-page/store/dialog-messages/dialog-messages.effects";
import { EventDataEffects } from "./modules/home/event-page/store/event-data/event-data.effects";
import { ParticipantEffects } from "./modules/home/event-page/store/participants/participants.effects";
import { ParticipationEffects } from "./modules/home/event-page/store/participation/participation.effects";
import { EventDataEffects as SPEventDataEffects } from "./modules/home/event-settings-page/store/event-data/event-data.effects";
import { ParticipationRequestEffects } from "./modules/home/event-settings-page/store/participation-request/participation-request.effects";
import { AdministeredEventsEffects } from "./modules/home/events-page/store/administered-events/administered-events.effects";
import { UserEventsEffects } from "./modules/home/events-page/store/user-events/user-events.effects";
import { ReceivedFriendRequestEffects } from "./modules/home/friends-page/store/received-friend-request/received-friend-request.effects";
import { SentFriendRequestEffects } from "./modules/home/friends-page/store/sent-friend-request/sent-friend-request.effects";
import { UserFriendsEffects } from "./modules/home/friends-page/store/user-friends/user-friends.effects";
import { UserListEffects } from "./modules/home/friends-page/store/user-list/user-list.effects";
import { HomePageComponent } from "./modules/home/home-page/home-page.component";
import { HomeRecordItemComponent } from "./modules/home/home-page/home-record-item/home-record-item.component";
import { HomeStatsComponent } from "./modules/home/home-page/home-stats/home-stats.component";
import { HomeUpcomingEventsItemComponent } from "./modules/home/home-page/home-upcoming-events/home-upcoming-events-item/home-upcoming-events-item.component";
import { HomeUpcomingEventsComponent } from "./modules/home/home-page/home-upcoming-events/home-upcoming-events.component";
import { MessagesPageModule } from "./modules/home/messages-page/messages-page.module";
import { ExemplaryMessagesEffects } from "./modules/home/messages-page/store/exemplary-messages/exemplary-messages.effects";
import { UserAvatarEffects } from "./modules/home/profile-page/store/user-avatar/user-avatar.effects";
import { UserDataEffects } from "./modules/home/profile-page/store/user-data/user-data.effects";
import { UserExemplaryFriendsEffects } from "./modules/home/profile-page/store/user-exemplary-friends/user-exemplary-friends.effects";
import { UserFriendsEffects as ProfilePageUserFriendsEffects } from "./modules/home/profile-page/store/user-friends/user-friends.effects";
import { UserPhotoEffects } from "./modules/home/profile-page/store/user-photos/user-photos.effects";
import { UserPostsEffects } from "./modules/home/profile-page/store/user-posts/user-posts.effects";
import { MainpageComponent } from "./modules/mainpage/mainpage.component";
import { ModulesModule } from "./modules/modules.module";
import CommentResponseEffects from "./modules/shared/post/comment-panel/store/comment-response/comment-response.effects";
import PostCommentEffects from "./modules/shared/post/comment-panel/store/post-comment/post-comment.effects";
import { NotFoundHttpInterceptor } from "./shared/helpers/NotFoundHttpInterceptor";
import { TokenInterceptor } from "./shared/services/token-interceptor.service";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginPageComponent,
    JoinUpPageComponent,
    HomePageComponent,
    RegistrationSuccessPopUpComponent,
    HomeRecordItemComponent,
    HomeUpcomingEventsComponent,
    HomeStatsComponent,
    HomeUpcomingEventsItemComponent
  ],

  imports: [
    SharedModule,
    BrowserModule,
    MessagesPageModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModulesModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([
      UserListEffects,
      ContactsEffects,
      CommentResponseEffects,
      PostCommentEffects,
      CommentResponseEffects,
      DialogMessagesEffects,
      ExemplaryMessagesEffects,
      UserDataEffects,
      UserAvatarEffects,
      UserExemplaryFriendsEffects,
      UserDataEffects,
      UserPostsEffects,
      UserPhotoEffects,
      UserFriendsEffects,
      UserEventsEffects,
      AdministeredEventsEffects,
      DialogListEffects,
      EventDataEffects,
      ParticipantEffects,
      ParticipationEffects,
      SentFriendRequestEffects,
      ReceivedFriendRequestEffects,
      SPEventDataEffects,
      ParticipationRequestEffects,
      ProfilePageUserFriendsEffects
    ]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotFoundHttpInterceptor,
      multi: true
    },
    LoggedInResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
