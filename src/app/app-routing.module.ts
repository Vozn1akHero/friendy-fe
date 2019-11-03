import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './modules/mainpage/mainpage.component';
import { ProfilePageComponent } from './modules/home/profile-page/profile-page.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { AuthGuard } from './auth.guard';
import { EventsPageComponent } from './modules/home/events-page/events-page.component';
import { FriendsPageComponent } from './modules/home/friends-page/friends-page.component';
import { GroupsPageComponent } from './modules/home/groups-page/groups-page.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { MessagesPageComponent } from './modules/home/messages-page/messages-page.component';
import { CommentsComponent } from './shared/components/comments/comments.component';
import {UserSettingsPageComponent} from './modules/home/user-settings-page/user-settings-page.component';
import {EventComponent} from './modules/home/event-page/event-page.component';
import {JoinupPageComponent} from './modules/auth/joinup-page/joinup-page.component';
import {LoginPageComponent} from './modules/auth/login-page/login-page.component';
import {CommonProfilePageComponent} from './modules/home/common-profile-page/common-profile-page.component';
import {NotFoundPageComponent} from './modules/not-found/not-found-page.component';
import {DialogPageComponent} from './modules/home/dialog-page/dialog-page.component';
import {FriendsSearchPageComponent} from './modules/home/friends-search-page/friends-search-page.component';
import {LoggedInResolver} from './logged-in.resolver';
import {InterlocutorDataResolver} from './modules/home/dialog-page/resolvers/interlocutor-data.resolver';
import {ExemplaryUsersResolver} from './modules/home/friends-search-page/resolvers/exemplary-users.resolver';
import {WrapperComponent} from './modules/wrapper/wrapper.component';

const routes: Routes = [
  {path: '',
    component: MainpageComponent,
    resolve: {isLoggedIn: LoggedInResolver}},

  {path: 'joinup',
    component: JoinupPageComponent,
    resolve: {isLoggedIn: LoggedInResolver},

    data: { page: 'joinup' }},
  {path: 'login',
    component: LoginPageComponent,
    resolve: {isLoggedIn: LoggedInResolver},
    data: { page: 'login' }},

  {path: 'app', component: WrapperComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'me', pathMatch: 'full'},

      {path: 'me', component: ProfilePageComponent, children: [
          {path: 'comments', component: CommentsComponent }
      ]},

      {path: 'profile/:id', component: CommonProfilePageComponent, children: [
          {path: 'comments', component: CommentsComponent }
      ]},
      {path: 'events', component: EventsPageComponent},

      {path: 'event/:id', component: EventComponent},

      {path: 'friends', component: FriendsPageComponent},

      {path: 'friends-search', component: FriendsSearchPageComponent,
        resolve: { startingUserList: ExemplaryUsersResolver }},

      {path: 'groups', component: GroupsPageComponent},

      {path: 'home', component: HomePageComponent},

      {path: 'messages', component: MessagesPageComponent},

      {path: 'dialog/:chatHash',
        component: DialogPageComponent,
        resolve: {interlocutorData: InterlocutorDataResolver}},

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
