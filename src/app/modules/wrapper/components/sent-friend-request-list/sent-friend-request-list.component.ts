import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import SentFriendRequestModel from '../../models/sent-friend-request.model';
import {Observable, Subscription} from 'rxjs';
import {FriendRequestsService} from '../../services/friend-requests.service';

@Component({
  selector: 'app-sent-friend-request-list',
  templateUrl: './sent-friend-request-list.component.html',
  styleUrls: ['./sent-friend-request-list.component.scss']
})
export class SentFriendRequestListComponent implements OnInit, OnDestroy {
  sentFriendRequests: SentFriendRequestModel[] = null;
  sentFriendRequestsSubscription: Subscription;

  private sentEventSubpageChosenSubscription: any;
  @Input() sentEventSubpageChosen: Observable<void>;

  constructor(private friendRequestsService: FriendRequestsService) { }

  ngOnInit() {
    this.sentEventSubpageChosenSubscription = this.sentEventSubpageChosen.subscribe(() => {
      this.getSentFriendRequests();
    });
  }

  getSentFriendRequests() {
    console.log(1);
    this.sentFriendRequestsSubscription = this.friendRequestsService
      .getSentFriendRequests()
      .subscribe(
        (sentFriendRequests:SentFriendRequestModel[]) => {
          console.log(sentFriendRequests);
          this.sentFriendRequests = sentFriendRequests;
        }
      );
  }

  ngOnDestroy() {
    this.sentEventSubpageChosenSubscription.unsubscribe()
  }
}
