import {NgModule} from '@angular/core';
import {UserSettingsPageComponent} from './user-settings-page.component';
import {BasicUserSettingsComponent} from './components/basic-user-settings/basic-user-settings.component';
import {ChosenUserSettingsSubpageComponent} from './components/chosen-user-settings-subpage/chosen-user-settings-subpage.component';
import {UserSettingsNavComponent} from './components/user-settings-nav/user-settings-nav.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../../app-routing.module';
import {UserInterestsSettingsComponent} from './components/user-interests-settings/user-interests-settings.component';
import {UserSafetySettingsComponent} from './components/user-safety-settings/user-safety-settings.component';
import {ModulesModule} from '../../modules.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    UserSettingsPageComponent,
    BasicUserSettingsComponent,
    ChosenUserSettingsSubpageComponent,
    UserSettingsNavComponent,
    UserInterestsSettingsComponent,
    UserSafetySettingsComponent
  ],
  exports: [

  ]
})


export class UserSettingsPageModule { }
