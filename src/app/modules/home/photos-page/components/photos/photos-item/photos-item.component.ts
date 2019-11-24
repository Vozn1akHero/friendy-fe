import {Component, Input, OnInit} from '@angular/core';
import Photo from '../../../models/photo.model';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-photos-item',
  templateUrl: './photos-item.component.html',
  styleUrls: ['./photos-item.component.scss']
})
export class PhotosItemComponent implements OnInit {
  @Input() photo: Photo;
  photoUrl: SafeStyle;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.photoUrl = this._sanitizer.bypassSecurityTrustStyle(`url(${this.photo.url})`);
  }

  zoomUpImage(){
  }
}
