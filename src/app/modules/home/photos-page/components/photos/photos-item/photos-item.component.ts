import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() openInModalEmitter = new EventEmitter<Photo>();
  @Output() deleteEventPhotoEmitter = new EventEmitter<Photo>();
  @Output() deleteUserPhotoEmitter = new EventEmitter<Photo>();
  filename: string;
  @Input() chosenSubpage: number;
  @Input() editable: boolean;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.photoUrl = this._sanitizer.bypassSecurityTrustStyle(`url(${this.photo.url})`);
    this.filename = this.photo.url.split('/').pop()
  }

  onClick(){
    this.openInModalEmitter.emit(this.photo);
  }

  onDelete() {
    if(this.chosenSubpage===1) {
      this.deleteUserPhotoEmitter.emit(this.photo);
    } else if(this.chosenSubpage === 2){
      this.deleteEventPhotoEmitter.emit(this.photo);
    }
  }
}
