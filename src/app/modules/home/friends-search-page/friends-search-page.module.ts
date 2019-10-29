import {NgModule} from '@angular/core';


import { FriendsAdvSearchFormComponent } from './components/friends-adv-search-form/friends-adv-search-form.component';

import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {AppRoutingModule} from '../../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FoundUserItemComponent } from './components/found-user-item/found-user-item.component';
import {FriendsSearchPageComponent} from './friends-search-page.component';
import {FoundUsersListComponent} from './components/found-users-list/found-users-list.component';
import {FriendsSearchPanelComponent} from './components/friends-search-panel/friends-search-panel.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    FriendsAdvSearchFormComponent,
    FriendsSearchPageComponent,
    FoundUsersListComponent,
    FoundUserItemComponent,
    FriendsSearchPanelComponent
  ],
  exports: []
})
export class FriendsSearchPageModule { }
