import {RouterModule, Routes} from '@angular/router';
import {ProfilePageComponent} from './profile-page.component';
import {ProfileBelongingResolver} from './resolvers/profile-belonging.resolver';
import {NgModule} from '@angular/core';

const routes : Routes = [{
  path: '',
  component: ProfilePageComponent,
  resolve: {
    profileBelongingStatus: ProfileBelongingResolver
  }
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations:[

  ],
  exports: [
    RouterModule
  ]
})
export class ProfilePageRoutingModule {}
