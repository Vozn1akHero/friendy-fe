import { Component, Input, OnInit } from "@angular/core";
import ExemplaryPhotoModel from "../../../models/exemplary-photo.model";
import { SafeStyle, DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-profile-photos-item",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.scss"]
})
export class PhotoComponent implements OnInit {
  @Input() photoContent: ExemplaryPhotoModel;
  photoUrl: SafeStyle;
  @Input() styles;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.photoUrl = this._sanitizer.bypassSecurityTrustStyle(
      `url(${this.photoContent.photoUrl})`
    );
  }
}
