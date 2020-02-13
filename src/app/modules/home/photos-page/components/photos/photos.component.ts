import {Component, Input, OnInit} from '@angular/core';
import {UserPhotoService} from '../../services/user-photo.service';
import {ActivatedRoute} from '@angular/router';
import Photo from '../../models/photo.model';
import {EventPhotoService} from '../../services/event-photo.service';
import {Observable, Subscription} from 'rxjs';
import {ScrollableListNotifierService} from '../../../../../shared/services/scrollable-list-notifier.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @Input() chosenSubpage: string;
  photos: Photo[];
  photos$: Observable<Photo[]>;
  loaded$: Observable<boolean>;
  @Input() id: number;
  listScrollListenerSub: Subscription;

  constructor(private userPhotoService : UserPhotoService,
              private scrollableListNotifierService: ScrollableListNotifierService,
              private eventPhotoService : EventPhotoService) { }

  ngOnInit() {
    if(this.chosenSubpage === "profile-page"){
      this.getUserPhotos();
      this.setListScrollListenerForUserPhotos();
    } else {
      this.getEventPhotos();
      this.setListScrollListenerForEventPhotos();
    }
  }

  setListScrollListenerForUserPhotos(){
    this.listScrollListenerSub = this.scrollableListNotifierService.endReached$.subscribe(value => {
      if(value){
        this.userPhotoService.getRange(this.id, this.scrollableListNotifierService.currentPage).subscribe();
        this.scrollableListNotifierService.setDefaultValue();
      }
    })
  }

  setListScrollListenerForEventPhotos(){
    this.listScrollListenerSub = this.scrollableListNotifierService.endReached$.subscribe(value => {
      if(value){
        this.eventPhotoService.getRange(this.id, this.scrollableListNotifierService.currentPage).subscribe();
        this.scrollableListNotifierService.setDefaultValue();
      }
    })
  }

  getUserPhotos(){
    this.userPhotoService.getRange(this.id, 1).subscribe();
    this.photos$ = this.userPhotoService.userPhotos$;
    this.loaded$ = this.userPhotoService.loaded$;
  }

  getEventPhotos(){
    this.eventPhotoService.getRange(this.id, 1).subscribe();
    this.photos$ = this.eventPhotoService.eventPhotos$;
    this.loaded$ = this.eventPhotoService.loaded$;
  }
}
