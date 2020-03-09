import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import {SharedComponentsModule} from './components/shared-components.module';
import {ContentLoaderModule} from '@ngneat/content-loader';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    ContentLoaderModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedComponentsModule
  ],
  declarations: [

  ],
  exports: [
    ContentLoaderModule,
    SharedComponentsModule
  ]
})


export class SharedModule { }
