import {Component, Input, OnInit} from '@angular/core';
import ReceivedFriendRequestModel from '../../../../../models/received-friend-request.model';

@Component({
  selector: 'app-received-friend-request-item',
  templateUrl: './received-friend-request-item.component.html',
  styleUrls: ['./received-friend-request-item.component.scss']
})
export class ReceivedFriendRequestItemComponent implements OnInit {
  @Input() receivedFriendRequest: ReceivedFriendRequestModel[];

  constructor() { }

  ngOnInit() {
  }

}
