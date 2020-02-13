import {NgModule} from '@angular/core';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../../app-routing.module';
import {PhotosPageComponent} from './photos-page.component';
import {PhotosComponent} from './components/photos/photos.component';
import {PhotosItemComponent} from './components/photos/photos-item/photos-item.component';
import {PhotosPageHeaderComponent} from './components/photos-page-header/photos-page-header.component';
import {NewPhotoFormComponent} from './components/photos-page-header/new-photo-form/new-photo-form.component';
import {BaseDataPanelComponent} from './components/photos-page-header/base-data-panel/base-data-panel.component';

@NgModule({
  imports: [
    InfiniteScrollModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  declarations: [
    PhotosPageComponent,
    PhotosComponent,
    PhotosItemComponent,
    PhotosPageHeaderComponent,
    NewPhotoFormComponent,
    BaseDataPanelComponent
  ],
  exports: [
    PhotosPageComponent,
    PhotosComponent,
    PhotosItemComponent,
    PhotosPageHeaderComponent,
    NewPhotoFormComponent,
    BaseDataPanelComponent
  ]
})
export default class PhotosPageModule {

}
