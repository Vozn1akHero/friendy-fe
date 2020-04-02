import { Component, OnInit, Input } from "@angular/core";
import UserFriend from "../../../../models/user-friend.model";

@Component({
  selector: "app-friend-in-modal",
  templateUrl: "./friend-in-modal.component.html",
  styleUrls: ["./friend-in-modal.component.scss"]
})
export class FriendInModalComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() surname: string;
  @Input() avatarUrl: string;

  constructor() {}

  ngOnInit() {}
}
