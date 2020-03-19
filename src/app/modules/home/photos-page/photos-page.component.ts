import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserPhotoService } from "./services/user-photo.service";
import { EventPhotoService } from "./services/event-photo.service";
import { BaseDataService } from "./services/base-data.service";
import { ScrollableListNotifierService } from "../../../shared/services/scrollable-list-notifier.service";
import { UserIdService } from "../../../shared/services/user-id.service";
import { PhotoViewService } from "./services/photo-view.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-photos-page",
  templateUrl: "./photos-page.component.html",
  styleUrls: ["./photos-page.component.scss"],
  providers: [
    UserPhotoService,
    EventPhotoService,
    BaseDataService,
    PhotoViewService,
    ScrollableListNotifierService
  ]
})
export class PhotosPageComponent implements OnInit {
  chosenSubpage: number;
  id: number;
  editable: boolean;
  photoViewVisible$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private photoViewService: PhotoViewService,
    private userIdService: UserIdService,
    private scrollableListNotifierService: ScrollableListNotifierService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    this.photoViewVisible$ = this.photoViewService.visible$;
    this.getChosenSubpage();
  }

  updateList() {
    this.scrollableListNotifierService.notify();
  }

  getChosenSubpage() {
    if (this.router.url.includes("profile")) {
      this.chosenSubpage = 1;
      this.editable = this.userIdService.userIdValue === this.id;
    } else {
      this.editable = this.route.snapshot.data.isEventAdmin;
      this.chosenSubpage = 2;
    }
  }
}
