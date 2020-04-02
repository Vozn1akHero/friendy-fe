import { Component, Input } from "@angular/core";

@Component({
  selector: "app-event-avatar",
  templateUrl: "./event-avatar.component.html",
  styleUrls: ["./event-avatar.component.scss"]
})
export class EventAvatarComponent {
  @Input() activeSettings;
  @Input() eventId: number;
  @Input() avatarUrl;
}
