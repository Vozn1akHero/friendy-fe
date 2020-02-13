import {NgModule} from '@angular/core';
import {PostModule} from './post/post.module';

@NgModule({
  imports: [PostModule],
  exports: [PostModule]
})
export class SharedModulesModule {

}
