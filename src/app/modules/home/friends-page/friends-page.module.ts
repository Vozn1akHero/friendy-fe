import {NgModule} from '@angular/core';

import { FriendsListItemComponent } from './components/friends-list-item/friends-list-item.component';
import { SuggestedFriendsItemComponent } from './components/suggested-friends-item/suggested-friends-item.component';
import { FriendsAdvSearchFormComponent } from './components/friends-adv-search-form/friends-adv-search-form.component';
import { FriendsPageComponent } from './friends-page.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {AppRoutingModule} from '../../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FriendsSearchInputComponent} from './components/friends-search-input/friends-search-input.component';
import { FoundUserItemComponent } from './components/found-user-item/found-user-item.component';


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
    FriendsAdvSearchFormComponent,
    FriendsListItemComponent,
    FriendsSearchInputComponent,
    FoundUserItemComponent
  ],
  exports: []
})
export class FriendsPageModule { }
