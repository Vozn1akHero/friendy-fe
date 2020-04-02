import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
import EventPhoto from "../../../models/event-photo.model";

@Component({
  selector: "app-event-photos-item",
  templateUrl: "./event-photos-item.component.html",
  styleUrls: ["./event-photos-item.component.scss"]
})
export class EventPhotosItemComponent implements OnInit {
  @Input() photo: EventPhoto;
  photoUrl: SafeStyle;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.photoUrl = this._sanitizer.bypassSecurityTrustStyle(
      `url(${this.photo.photoUrl})`
    );
  }
}
