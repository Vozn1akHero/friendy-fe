import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ExemplaryPhotosService } from "../../services/exemplary-photos.service";
import ExemplaryPhotoModel from "../../models/exemplary-photo.model";
import { Subscription } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import { take } from "rxjs/operators";

@Component({
  selector: "photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit, OnDestroy {
  @Input() isUserProfileOwner: boolean;
  @Input() userId: number;
  activatedRoute: string;
  userPhotos: ExemplaryPhotoModel[];
  frUserPhotos: ExemplaryPhotoModel[];
  srUserPhotos: ExemplaryPhotoModel[];
  userPhotosLoaded: boolean;
  sub: Subscription;

  constructor(
    private exemplaryPhotosService: ExemplaryPhotosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.setActivatedRoute();
    this.getPhotos();
  }

  setActivatedRoute() {
    this.activatedRoute = this.router.url;
  }

  getPhotos() {
    this.exemplaryPhotosService
      .getExemplary(this.userId)
      .pipe(take(1))
      .subscribe((res: HttpResponse<any[]>) => {
        this.userPhotos = [
          ...res.body.map(value => new ExemplaryPhotoModel(value.image.path))
        ];
        this.userPhotosLoaded = true;
      });
  }

  ngOnDestroy(): void {}
}
