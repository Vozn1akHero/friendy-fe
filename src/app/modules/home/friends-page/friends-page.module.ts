import {NgModule} from '@angular/core';

import { FriendsListItemComponent } from './components/friends-list-item/friends-list-item.component';
import { SuggestedFriendsItemComponent } from './components/suggested-friends-panel/suggested-friends-item/suggested-friends-item.component';
import { FriendsPageComponent } from './friends-page.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {AppRoutingModule} from '../../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FriendsSearchInputComponent} from './components/friends-search-input/friends-search-input.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import {SuggestedFriendsPanelComponent} from './components/suggested-friends-panel/suggested-friends-panel.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    FriendsPageComponent,
    SuggestedFriendsItemComponent,
    FriendsListItemComponent,
    FriendsSearchInputComponent,
    FriendListComponent,
    SuggestedFriendsPanelComponent
  ],
  exports: []
})
export class FriendsPageModule { }
