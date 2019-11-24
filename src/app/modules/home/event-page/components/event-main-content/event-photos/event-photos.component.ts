import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import EventPhoto from '../../../models/event-photo.model';
import {EventPhotoService} from '../../../services/event-photo.service';

@Component({
  selector: 'app-event-photos',
  templateUrl: './event-photos.component.html',
  styleUrls: ['./event-photos.component.scss']
})
export class EventPhotosComponent implements OnInit {
  activatedRoute: string;
  eventId: number;
  photos$: Observable<EventPhoto[]>;
  photosLoaded$: Observable<boolean>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private eventPhotoService: EventPhotoService) { }

  ngOnInit() {
    this.eventId = +this.route.snapshot.paramMap.get("id");
    this.activatedRoute = this.router.url;

    this.setPhotosLoaded();
    this.getEventPhotos();
    this.setEventPhotos();
  }

  getEventPhotos(){
    this.eventPhotoService.getExemplary(this.eventId);
  }

  setEventPhotos(){
    this.photos$ = this.eventPhotoService.eventPhotos$;
  }

  setPhotosLoaded(){
    this.photosLoaded$ = this.eventPhotoService.eventPhotosLoaded$;
  }
}
