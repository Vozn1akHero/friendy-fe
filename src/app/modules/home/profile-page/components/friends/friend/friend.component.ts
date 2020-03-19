import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import ExemplaryFriend from "../../../models/exemplary-friend.model";

@Component({
  selector: "friend",
  templateUrl: "./friend.component.html",
  styleUrls: ["./friend.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendComponent implements OnInit {
  @Input() exemplaryFriend: ExemplaryFriend;

  constructor() {}

  ngOnInit() {}
}
