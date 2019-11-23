import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {EventPhotoService} from '../../services/event-photo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-photos-page-header',
  templateUrl: './photos-page-header.component.html',
  styleUrls: ['./photos-page-header.component.scss']
})
export class PhotosPageHeaderComponent {
  @Input() id;

  constructor() { }
}
