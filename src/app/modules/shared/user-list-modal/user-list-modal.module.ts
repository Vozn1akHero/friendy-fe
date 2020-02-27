import {NgModule} from '@angular/core';
import {UserListModalComponent} from './user-list-modal.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {AppRoutingModule} from '../../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  declarations: [UserListModalComponent, UserComponent],
  exports: []
})
export class UserListModalModule {

}
