import {NgModule} from '@angular/core';
import {PostModule} from './post/post.module';
import {UserListModalModule} from './user-list-modal/user-list-modal.module';

@NgModule({
  imports: [PostModule,
    UserListModalModule],
  exports: [PostModule]
})
export class SharedModulesModule {

}
