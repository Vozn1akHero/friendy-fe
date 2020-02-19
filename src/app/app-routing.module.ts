import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './modules/mainpage/mainpage.component';
import { ProfilePageComponent } from './modules/home/profile-page/profile-page.component';
import { AuthGuard } from './auth.guard';
import { EventsPageComponent } from './modules/home/events-page/events-page.component';
import { FriendsPageComponent } from './modules/home/friends-page/friends-page.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { MessagesPageComponent } from './modules/home/messages-page/messages-page.component';
import {UserSettingsPageComponent} from './modules/home/user-settings-page/user-settings-page.component';
import {EventComponent} from './modules/home/event-page/event-page.component';
import {JoinUpPageComponent} from './modules/auth/joinup-page/joinup-page.component';
import {LoginPageComponent} from './modules/auth/login-page/login-page.component';
import {DialogPageComponent} from './modules/home/dialog-page/dialog-page.component';
import {FriendsSearchPageComponent} from './modules/home/friends-search-page/friends-search-page.component';
import {LoggedInResolver} from './logged-in.resolver';
import {InterlocutorDataResolver} from './modules/home/dialog-page/resolvers/interlocutor-data.resolver';
import {ExemplaryUsersResolver} from './modules/home/friends-search-page/resolvers/exemplary-users.resolver';
import {WrapperComponent} from './modules/wrapper/wrapper.component';
import {ProfileBelongingResolver} from './modules/home/profile-page/resolvers/profile-belonging.resolver';
import {ProfileIdResolver} from './modules/wrapper/resolvers/profile-id.resolver';
import {EventSettingsPageComponent} from './modules/home/event-settings-page/event-settings-page.component';
import {IsEventAdminResolver} from './modules/home/event-page/resolvers/is-event-admin.resolver';
import {EventParticipantsPageComponent} from './modules/home/event-participants-page/event-participants-page.component';
import {PhotosPageComponent} from './modules/home/photos-page/photos-page.component';
import {ChatDataResolver} from './modules/home/dialog-page/resolvers/chat-data.resolver';
import {IsEventCreatorResolver} from './modules/home/event-settings-page/resolvers/is-event-creator.resolver';
import {NotFoundPageComponent} from './modules/not-found/not-found-page.component';

const routes: Routes = [
  {path: '',
    component: MainpageComponent,
    resolve: {isLoggedIn: LoggedInResolver}},
  {path: 'joinup',
    component: JoinUpPageComponent,
    resolve: {isLoggedIn: LoggedInResolver},
    data: { page: 'joinup' }},
  {path: 'login',
    component: LoginPageComponent,
    resolve: {isLoggedIn: LoggedInResolver},
    data: { page: 'login' }},
  {path: 'app',
    component: WrapperComponent,
    resolve: {
      profileId: ProfileIdResolver
    },
    canActivate: [AuthGuard],
    children: [
      {path: '',
        redirectTo: 'messages',
        pathMatch: 'full'},
      {
        path: 'profile',
        component: ProfilePageComponent
      },
      {
        path: 'profile/:id',
        component: ProfilePageComponent,
        resolve: {
          profileBelongingStatus: ProfileBelongingResolver
        }
      },

      { path: 'profile/:id/photos', component: PhotosPageComponent },

      {path: 'events', component: EventsPageComponent},

      {path: 'event/:id',
        component: EventComponent,
        resolve: {
          isEventAdmin: IsEventAdminResolver
        }
      },

      { path: 'event/:id/settings',
        resolve: {
          isEventAdmin: IsEventAdminResolver,
          isEventCreator: IsEventCreatorResolver
        },
        component: EventSettingsPageComponent },

      { path: 'event/:id/participants',
        component: EventParticipantsPageComponent },

      {
        path: 'event/:id/photos',
        component: PhotosPageComponent
      },

      {path: 'friends', component: FriendsPageComponent},

      {path: 'friends-search', component: FriendsSearchPageComponent,
        resolve: { startingUserList: ExemplaryUsersResolver }},

      /*{path: 'home', component: HomePageComponent},

      {path: 'messages', component: MessagesPageComponent},*/

      {path: 'dialog', component: DialogPageComponent},

      {path: 'dialog/:id',
        component: DialogPageComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {interlocutorData: InterlocutorDataResolver,
          profileId: ProfileIdResolver,
          chatData: ChatDataResolver }},

      {path: 'settings', component: UserSettingsPageComponent}
  ]},

  {path: '404', component: NotFoundPageComponent},

  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
