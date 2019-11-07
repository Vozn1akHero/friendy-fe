import {NgModule} from '@angular/core';


import { FriendsSearchFormComponent } from './components/friends-search-form/friends-search-form.component';

import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {AppRoutingModule} from '../../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FoundUserItemComponent } from './components/found-users-list/found-user-item/found-user-item.component';
import {FriendsSearchPageComponent} from './friends-search-page.component';
import {FoundUsersListComponent} from './components/found-users-list/found-users-list.component';
import {FriendsSearchPanelComponent} from './components/friends-search-panel/friends-search-panel.component';
import {ExemplaryUsersResolver} from './resolvers/exemplary-users.resolver';
import {FriendsSearchService} from './services/friends-search.service';
import {ButtonHoverInfoModalComponent} from '../../../shared/components/button-hover-info-modal/button-hover-info-modal.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    FriendsSearchFormComponent,
    FriendsSearchPageComponent,
    FoundUsersListComponent,
    FoundUserItemComponent,
    FriendsSearchPanelComponent
  ],
  exports: [],
  providers: [ExemplaryUsersResolver, FriendsSearchService]
})
export class FriendsSearchPageModule { }
