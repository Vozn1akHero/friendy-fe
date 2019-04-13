import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ProfileComponent } from './components/inside/profile/profile.component';
import { WholenessComponent } from './components/inside/wholeness/wholeness.component';
import { AuthGuard } from './auth.guard';
import { EventsComponent } from './components/inside/events/events.component';
import { FriendsComponent } from './components/inside/friends/friends.component';
import { GroupsComponent } from './components/inside/groups/groups.component';
import { HomeComponent } from './components/inside/home/home.component';
import { MessagesComponent } from './components/inside/messages/messages.component';
import { MessageComponent } from './components/inside/messages/message/message.component';
import { DialogComponent } from './components/inside/messages/dialog/dialog.component';
import { CommentsComponent } from './components/shared/comments/comments.component';
import {UserSettingsComponent} from './components/inside/user-settings/user-settings.component';
import {EventComponent} from './components/inside/event/event.component';
import {JoinupPopupComponent} from './auth/joinup-popup/joinup-popup.component';
import {LoginPopupComponent} from './auth/login-popup/login-popup.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'joinup', component: JoinupPopupComponent, data: { page: 'joinup' }},
  {path: 'login', component: LoginPopupComponent, data: { page: 'login' }},
  {path: 'app', component: WholenessComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent, children: [
          {path: 'comments', component: CommentsComponent }
      ]},
      {path: 'events', component: EventsComponent},
      {path: 'event/:id', component: EventComponent},
      {path: 'friends', component: FriendsComponent},
      {path: 'groups', component: GroupsComponent},
      {path: 'home', component: HomeComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'dialog', component: DialogComponent},
      {path: 'settings', component: UserSettingsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
