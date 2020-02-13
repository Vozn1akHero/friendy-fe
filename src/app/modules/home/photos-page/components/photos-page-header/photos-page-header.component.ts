import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-photos-page-header',
  templateUrl: './photos-page-header.component.html',
  styleUrls: ['./photos-page-header.component.scss']
})
export class PhotosPageHeaderComponent {
  @Input() id;

  constructor() { }
}
