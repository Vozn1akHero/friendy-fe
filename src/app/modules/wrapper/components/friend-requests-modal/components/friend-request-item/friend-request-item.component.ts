import {Component, Input, OnInit} from '@angular/core';
import SentFriendRequestModel from '../../../../models/sent-friend-request.model';
import ReceivedFriendRequestModel from '../../../../models/received-friend-request.model';

@Component({
  selector: 'app-friend-request-item',
  templateUrl: './friend-request-item.component.html',
  styleUrls: ['./friend-request-item.component.scss']
})
export class FriendRequestItemComponent implements OnInit {
  @Input() friendRequest: SentFriendRequestModel | ReceivedFriendRequestModel;

  checkIfInstanceOfSentRequest(){
    return this.friendRequest instanceof SentFriendRequestModel;
  }

  checkIfInstanceOfReceivedRequest(){
    return this.friendRequest instanceof ReceivedFriendRequestModel;
  }

  onRemoveFriendRequestBtnClick(){
  }

  constructor() { }

  ngOnInit() {
    console.log(this.friendRequest)
  }

}
