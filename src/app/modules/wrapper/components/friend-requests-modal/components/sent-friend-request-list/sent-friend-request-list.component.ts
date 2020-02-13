import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import SentFriendRequestModel from '../../../../models/sent-friend-request.model';
import {FriendRequestsModalService} from '../../../../services/friend-requests-modal.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sent-friend-request-list',
  templateUrl: './sent-friend-request-list.component.html',
  styleUrls: ['./sent-friend-request-list.component.scss']
})
export class SentFriendRequestListComponent implements OnInit, OnDestroy {
  sentFriendRequests: Observable<SentFriendRequestModel[]>;
  sentFriendRequestsLoaded$:  Observable<boolean>;

  constructor(private friendRequestsModalService: FriendRequestsModalService) { }

  ngOnInit() {
    this.getSentFriendRequests();
  }

  getSentFriendRequests() {
    this.friendRequestsModalService
      .getSentFriendRequests();
    this.sentFriendRequestsLoaded$ = this.friendRequestsModalService.sentFriendRequestsLoaded$;
    this.sentFriendRequests = this.friendRequestsModalService.sentFriendRequests$;
  }

  ngOnDestroy() {

  }
}
