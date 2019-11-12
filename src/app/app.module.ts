import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './modules/mainpage/mainpage.component';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { JoinupPageComponent } from './modules/auth/joinup-page/joinup-page.component';


import { GroupsPageComponent } from './modules/home/groups-page/groups-page.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';


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







import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RegistrationSuccessPopUpComponent} from './modules/auth/joinup-page/components/registration-success-pop-up/registration-success-pop-up.component';
import {TokenInterceptor} from './shared/services/token-interceptor.service';
import {Store, StoreModule} from '@ngrx/store';
import * as fromApp from './core/ngrx/store/app.reducer';
import { environment } from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {SharedModule} from './shared/shared.module';
import {ModulesModule} from './modules/modules.module';
import {ProfilePageModule} from './modules/home/profile-page/profile-page.module';
import {UserDataEffects} from './modules/home/common-profile-page/store/user-data/user-data.effects';



import {UserPostsEffects} from './modules/home/profile-page/store/user-posts/user-posts.effects';

import {UserFriendsEffects} from './modules/home/friends-page/store/user-friends/user-friends.effects';
import {UserEventsEffects} from './modules/home/events-page/store/user-events/user-events.effects';
import {AdministeredEventsEffects} from './modules/home/events-page/store/administered-events/administered-events.effects';
import {UserAvatarEffects} from './modules/home/profile-page/store/user-avatar/user-avatar.effects';
import {MainUserDataEffects} from './modules/home/profile-page/store/user-data/user-data.effects';
import {UserExemplaryFriendsEffects} from './modules/home/profile-page/store/user-exemplary-friends/user-exemplary-friends.effects';
import {ExemplaryMessagesEffects} from './modules/home/messages-page/store/exemplary-messages/exemplary-messages.effects';
import {MessagesPageModule} from './modules/home/messages-page/messages-page.module';
import {EventDataEffects} from './modules/home/event-page/store/event-data/event-data.effects';
import {DialogMessagesEffects} from './modules/home/dialog-page/store/dialog-messages/dialog-messages.effects';
import {LoggedInResolver} from './logged-in.resolver';




@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginPageComponent,
    JoinupPageComponent,
    GroupsPageComponent,
    HomePageComponent,
    RegistrationSuccessPopUpComponent,
    GroupCreationComponent,
    GroupsListComponent,
    NewGroupBtnComponent,
    SearchGroupsComponent,
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
  ],
  imports: [
    ProfilePageModule,
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
      //UserEffects,
      EventDataEffects,
      DialogMessagesEffects,
      ExemplaryMessagesEffects,
      MainUserDataEffects,
      UserAvatarEffects,
      UserExemplaryFriendsEffects,
      UserDataEffects,
      UserPostsEffects,
      UserFriendsEffects,
      UserEventsEffects,
      AdministeredEventsEffects
    ]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    LoggedInResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

  }
}
