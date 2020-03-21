import { AppState } from "../../store/reducers";
import { Store } from "@ngrx/store";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ExemplaryPhotosService } from "../../services/exemplary-photos.service";
import ExemplaryPhotoModel from "../../models/exemplary-photo.model";
import { Subscription, Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import { take } from "rxjs/operators";
import * as UserPhotoActions from "../../store/user-photos/user-photos.actions";

@Component({
  selector: "photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit {
  @Input() isUserProfileOwner: boolean;
  @Input() userId: number;
  activatedRoute: string;
  userPhotos$: Observable<ExemplaryPhotoModel[]>;
  loaded$: Observable<boolean>;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.activatedRoute = this.router.url;
    this.store.dispatch(
      new UserPhotoActions.GetPhotosById({ id: this.userId })
    );
    this.loaded$ = this.store.select(
      state => state.profilePageUserPhotos.loaded[this.userId]
    );
    this.userPhotos$ = this.store.select(
      state => state.profilePageUserPhotos.exemplaryPhotos[this.userId]
    );
  }
}
