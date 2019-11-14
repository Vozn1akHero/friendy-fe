import {Component, Input, OnInit} from '@angular/core';
import SentFriendRequestModel from '../../../../../models/sent-friend-request.model';

@Component({
  selector: 'app-sent-friend-request-item',
  templateUrl: './sent-friend-request-item.component.html',
  styleUrls: ['./sent-friend-request-item.component.scss']
})
export class SentFriendRequestItemComponent implements OnInit {
  @Input() sentFriendRequest : SentFriendRequestModel;

  constructor() { }

  ngOnInit() {
  }

}
