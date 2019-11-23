import {Component, Input, OnInit} from '@angular/core';
import {UserPhotoService} from '../../services/user-photo.service';
import {ActivatedRoute} from '@angular/router';
import Photo from '../../models/photo.model';
import {EventPhotoService} from '../../services/event-photo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @Input() chosenSubpage: string;
  photos: Photo[];
  photos$: Observable<Photo[]>;
  @Input() id: number;

  constructor(private userPhotoService : UserPhotoService,
              private eventPhotoService : EventPhotoService) { }

  ngOnInit() {
    if(this.chosenSubpage === "profile-page"){
      this.getUserPhotos();
    } else {
      this.getEventPhotos();
    }
  }

  getUserPhotos(){
    this.userPhotoService.getRange(this.id, 0, 10);
    this.photos$ = this.userPhotoService.userPhotos$;
  }

  getEventPhotos(){
    this.eventPhotoService.getRange(this.id, 0, 10);
    this.photos$ = this.eventPhotoService.eventPhotos$;
  }
}
