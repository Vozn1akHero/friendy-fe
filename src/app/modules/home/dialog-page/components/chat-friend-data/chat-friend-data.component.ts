import { Component, Input, OnInit } from "@angular/core";
import InterlocutorDataModel from "../../models/interlocutor-data.model";
import * as moment from "moment";

@Component({
  selector: "app-chat-friend-data",
  templateUrl: "./chat-friend-data.component.html",
  styleUrls: ["./chat-friend-data.component.scss"]
})
export class ChatFriendDataComponent implements OnInit {
  @Input() interlocutorData: InterlocutorDataModel;
  isOnline: boolean;
  lastTimeOnline: string;
  @Input() userId: number;

  constructor() {}

  ngOnInit() {
    if (this.interlocutorData.session.sessionEnd != null) {
      this.lastTimeOnline = moment(
        this.interlocutorData.session.sessionEnd
      ).fromNow();
      this.isOnline = false;
    } else {
      this.isOnline = true;
    }
  }
}
