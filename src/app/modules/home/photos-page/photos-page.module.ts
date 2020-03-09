import {NgModule} from '@angular/core';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../../app-routing.module';
import {PhotosPageComponent} from './photos-page.component';
import {PhotosComponent} from './components/photos/photos.component';
import {PhotosItemComponent} from './components/photos/photos-item/photos-item.component';
import {NewPhotoButtonComponent} from './components/new-photo-button/new-photo-button.component';
import {BaseDataPanelComponent} from './components/base-data-panel/base-data-panel.component';
import { PhotoViewComponent } from './components/photo-view/photo-view.component';

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
    NewPhotoButtonComponent,
    BaseDataPanelComponent,
    PhotoViewComponent
  ],
  exports: [
    PhotosPageComponent,
    PhotosComponent,
    PhotosItemComponent,
    NewPhotoButtonComponent,
    BaseDataPanelComponent
  ]
})
export class PhotosPageModule {}
