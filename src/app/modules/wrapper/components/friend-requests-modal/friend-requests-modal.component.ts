import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import ReceivedFriendRequestModel from '../../models/received-friend-request.model';
import SentFriendRequestModel from '../../models/sent-friend-request.model';
import {FriendRequestsModalService} from '../../services/friend-requests-modal.service';

@Component({
  selector: 'app-friend-requests-modal',
  templateUrl: './friend-requests-modal.component.html',
  styleUrls: ['./friend-requests-modal.component.scss']
})
export class FriendRequestsModalComponent implements OnInit, OnDestroy {
  chosenSubpage: string = "received-requests";

  receivedFriendRequests: Observable<ReceivedFriendRequestModel[]>;
/*  receivedFriendRequestsSubscription: Subscription;*/
  receivedFriendRequestsLoaded$: Observable<boolean>;

  sentFriendRequests: Observable<SentFriendRequestModel[]>;
/*  sentFriendRequestsSubscription: Subscription;*/
  sentFriendRequestsLoaded$:  Observable<boolean>;

  constructor(private friendRequestsModalService: FriendRequestsModalService) { }

  ngOnInit() {
  }

  onReceivedFriendRequestsBtnClick(){
    this.chosenSubpage = "received-requests";
    this.getReceivedFriendRequests();
  }

  onSentFriendRequestsBtnClick(){
    this.chosenSubpage = "sent-requests";
    this.getSentFriendRequests();
  }

  getReceivedFriendRequests() {
    this.friendRequestsModalService
      .getReceivedFriendRequests();
    this.receivedFriendRequestsLoaded$ = this.friendRequestsModalService.receivedFriendRequestsLoaded$;
    this.receivedFriendRequests = this.friendRequestsModalService.receivedFriendRequests$;
  }

  getSentFriendRequests() {
    this.friendRequestsModalService
      .getSentFriendRequests();
    this.sentFriendRequestsLoaded$ = this.friendRequestsModalService.sentFriendRequestsLoaded$;
    this.sentFriendRequests = this.friendRequestsModalService.sentFriendRequests$;
  }

  closeModal(){
    this.friendRequestsModalService.modalOpened = false;
  }

  ngOnDestroy(): void {

  }
}
