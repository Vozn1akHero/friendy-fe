import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-friend-requests-modal',
  templateUrl: './friend-requests-modal.component.html',
  styleUrls: ['./friend-requests-modal.component.scss']
})
export class FriendRequestsModalComponent implements OnInit, OnDestroy {
  chosenSubpage: string;

  constructor() {
    this.chosenSubpage = "received-requests";
  }

  ngOnInit() {
    this.chosenSubpage = "received-requests";
  }

  onReceivedFriendRequestsBtnClick(){
    this.chosenSubpage = "received-requests";
  }

  onSentFriendRequestsBtnClick(){
    this.chosenSubpage = "sent-requests";
  }

  ngOnDestroy(): void {

  }
}
