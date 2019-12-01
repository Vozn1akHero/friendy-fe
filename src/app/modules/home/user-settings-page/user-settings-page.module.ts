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
import { UserEducationSettingsComponent } from './components/user-education-settings/user-education-settings.component';
import { UserOtherSettingsComponent } from './components/user-other-settings/user-other-settings.component';


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
    UserSafetySettingsComponent,
    UserEducationSettingsComponent,
    UserOtherSettingsComponent
  ],
  exports: [

  ]
})


export class UserSettingsPageModule { }
