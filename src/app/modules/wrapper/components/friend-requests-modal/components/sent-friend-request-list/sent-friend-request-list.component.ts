import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import SentFriendRequestModel from '../../../../models/sent-friend-request.model';

@Component({
  selector: 'app-sent-friend-request-list',
  templateUrl: './sent-friend-request-list.component.html',
  styleUrls: ['./sent-friend-request-list.component.scss']
})
export class SentFriendRequestListComponent implements OnInit, OnDestroy {
  @Input() sentFriendRequests: SentFriendRequestModel[];

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }
}
