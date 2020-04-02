import { Component, Input } from "@angular/core";

@Component({
  selector: "app-participant-small-item",
  templateUrl: "./participant-small-item.component.html",
  styleUrls: ["./participant-small-item.component.scss"]
})
export class ParticipantSmallItemComponent {
  @Input() id: number;
  @Input() name: string;
  @Input() surname: string;
  @Input() avatarUrl: string;
}
