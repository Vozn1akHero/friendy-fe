import {NgModule} from '@angular/core';
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
import {FriendsSearchPanelComponent} from './components/friends-search-panel/friends-search-panel.component';
import {FriendsSearchFormComponent} from './components/friends-search-form/friends-search-form.component';
import {FoundUsersListComponent} from './components/found-users-list/found-users-list.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';


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
    FriendsSearchInputComponent,
    FriendListComponent,
    SuggestedFriendsPanelComponent,
    FriendsSearchControlsComponent,
    FriendsSearchFormComponent,
    FoundUsersListComponent,
    FriendsSearchPanelComponent,
    NavigationPanelComponent
  ],
  exports: []
})
export class FriendsPageModule { }
