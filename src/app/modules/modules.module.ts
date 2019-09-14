import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageModule } from './home/profile-page/profile-page.module';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import {CommonProfilePageModule} from './home/common-profile-page/common-profile-page.module';

import {NotFoundPageComponent} from './not-found/not-found-page.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfilePageModule,
    CommonProfilePageModule,
    LayoutModule
  ],
  declarations: [
    NotFoundPageComponent
  ],
  exports: [

  ]
})


export class ModulesModule { }
