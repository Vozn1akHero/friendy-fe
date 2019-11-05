import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FriendRequestsService} from '../../services/friend-requests.service';
import {Observable, Subscription} from 'rxjs';
import ReceivedFriendRequestModel from '../../models/received-friend-request.model';
import SentFriendRequestModel from '../../models/sent-friend-request.model';

@Component({
  selector: 'app-friend-request-list',
  templateUrl: './friend-request-list.component.html',
  styleUrls: ['./friend-request-list.component.scss']
})
export class FriendRequestListComponent implements OnInit, OnDestroy {
  receivedFriendRequestsSubscription: Subscription;
  sentFriendRequestsSubscription: Subscription;

  receivedFriendRequests: ReceivedFriendRequestModel[];
  sentFriendRequests: SentFriendRequestModel[];

  private eventsSubscription: any;
  @Input() events: Observable<void>;


  constructor(private http: HttpClient,
              private friendRequestsService: FriendRequestsService) {}

  ngOnInit() {
    this.eventsSubscription = this.events.subscribe(() => {
      this.getSentFriendRequests();
    });

    this.getReceivedFriendRequests();
  }

  getSentFriendRequests() {
    this.sentFriendRequestsSubscription = this.friendRequestsService
      .getSentFriendRequests()
      .subscribe(
        (sentFriendRequests:SentFriendRequestModel[]) => {
        this.sentFriendRequests = sentFriendRequests;
      }
    );
  }

  getReceivedFriendRequests() {
    this.receivedFriendRequestsSubscription = this.friendRequestsService
      .getReceivedFriendRequests()
      .subscribe((receivedFriendRequests: ReceivedFriendRequestModel[]) => {
        this.receivedFriendRequests = receivedFriendRequests;
      })
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe()
  }
}
