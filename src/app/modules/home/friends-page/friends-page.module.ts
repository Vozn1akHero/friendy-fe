import {NgModule} from '@angular/core';

import { FriendsListItemComponent } from './components/friend-list/friends-list-item/friends-list-item.component';
import { SuggestedFriendsItemComponent } from './components/suggested-friends-panel/suggested-friends-item/suggested-friends-item.component';
import { FriendsPageComponent } from './friends-page.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {AppRoutingModule} from '../../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FriendsSearchInputComponent} from './components/friends-search-input/friends-search-input.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import {SuggestedFriendsPanelComponent} from './components/suggested-friends-panel/suggested-friends-panel.component';
import { FriendsSearchControlsComponent } from './components/friends-search-controls/friends-search-controls.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {ScrollableListNotifierService} from "../../../shared/services/scrollable-list-notifier.service";
import { FriendsSearchBtnComponent } from './components/friends-search-btn/friends-search-btn.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  declarations: [
    FriendsPageComponent,
    SuggestedFriendsItemComponent,
    FriendsListItemComponent,
    FriendsSearchInputComponent,
    FriendListComponent,
    SuggestedFriendsPanelComponent,
    FriendsSearchControlsComponent,
    FriendsSearchBtnComponent
  ],
  exports: []
})
export class FriendsPageModule { }
