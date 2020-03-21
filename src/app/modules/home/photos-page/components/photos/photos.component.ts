import { Component, Input, OnInit } from "@angular/core";
import { UserPhotoService } from "../../services/user-photo.service";
import Photo from "../../models/photo.model";
import { EventPhotoService } from "../../services/event-photo.service";
import { Observable, Subscription } from "rxjs";
import { ScrollableListNotifierService } from "../../../../../shared/services/scrollable-list-notifier.service";
import { FullScreenImageService } from "../../../../../shared/services/full-screen-image.service";
import { PhotoViewService } from "../../services/photo-view.service";

@Component({
  selector: "app-photos-list",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit {
  @Input() chosenSubpage: number;
  photos: Photo[];
  photos$: Observable<Photo[]>;
  loaded$: Observable<boolean>;
  @Input() id: number;
  listScrollListenerSub: Subscription;
  @Input() editable: boolean;

  constructor(
    private userPhotoService: UserPhotoService,
    private photoViewService: PhotoViewService,
    private scrollableListNotifierService: ScrollableListNotifierService,
    private eventPhotoService: EventPhotoService
  ) {}

  ngOnInit() {
    if (this.chosenSubpage === 1) {
      this.getUserPhotos();
      this.setListScrollListenerForUserPhotos();
    } else if (this.chosenSubpage === 2) {
      this.getEventPhotos();
      this.setListScrollListenerForEventPhotos();
    }
  }

  setListScrollListenerForUserPhotos() {
    this.listScrollListenerSub = this.scrollableListNotifierService.endReached$.subscribe(
      value => {
        if (value) {
          this.userPhotoService.getRange(
            this.id,
            this.scrollableListNotifierService.currentPage,
            10
          );
          this.scrollableListNotifierService.setDefaultValue();
        }
      }
    );
  }

  setListScrollListenerForEventPhotos() {
    this.listScrollListenerSub = this.scrollableListNotifierService.endReached$.subscribe(
      value => {
        if (value) {
          this.eventPhotoService.getRange(
            this.id,
            this.scrollableListNotifierService.currentPage,
            20
          );
          this.scrollableListNotifierService.setDefaultValue();
        }
      }
    );
  }

  getUserPhotos() {
    this.userPhotoService.getRange(this.id, 1, 10);
    this.photos$ = this.userPhotoService.userPhotos$;
    this.loaded$ = this.userPhotoService.loaded$;
  }

  getEventPhotos() {
    this.eventPhotoService.getRange(this.id, 1, 20);
    this.photos$ = this.eventPhotoService.eventPhotos$;
    this.loaded$ = this.eventPhotoService.loaded$;
  }

  openImageInModal(photo: Photo) {
    this.photoViewService.open(photo);
  }

  deleteEventPhoto(photo: Photo) {
    this.eventPhotoService.delete(photo.id);
  }

  deleteUserPhoto(photo: Photo) {
    this.userPhotoService.delete(photo.id);
  }
}
