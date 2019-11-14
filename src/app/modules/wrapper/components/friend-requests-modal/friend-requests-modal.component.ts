import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Subject, Subscription} from 'rxjs';
import ReceivedFriendRequestModel from '../../models/received-friend-request.model';
import SentFriendRequestModel from '../../models/sent-friend-request.model';
import {FriendRequestsService} from '../../services/friend-requests.service';

@Component({
  selector: 'app-friend-requests-modal',
  templateUrl: './friend-requests-modal.component.html',
  styleUrls: ['./friend-requests-modal.component.scss'],
  animations: [
    trigger('anim', [
      transition(':enter', [
        style({
          opacity: '0'
        }),
        animate(
          '75ms ease-in',
          style({ opacity: '1' })
        )
      ]),
      transition(':leave', [
        style({
          opacity: '1'
        }),
        animate(
          '100ms ease-out',
          style({ opacity: '0' })
        )
      ])
    ])
  ]
})
export class FriendRequestsModalComponent implements OnInit, OnDestroy {
  chosenSubpage: string = "received-requests";

  receivedFriendRequests: ReceivedFriendRequestModel[] = [];
  receivedFriendRequestsSubscription: Subscription;
  receivedFriendRequestsLoaded: boolean = false;

  sentFriendRequests: SentFriendRequestModel[] = [];
  sentFriendRequestsSubscription: Subscription;
  sendFriendRequestsLoaded: boolean = false;

  constructor(private friendRequestsService: FriendRequestsService) { }

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
    this.receivedFriendRequestsSubscription = this.friendRequestsService
      .getReceivedFriendRequests()
      .subscribe((receivedFriendRequests: ReceivedFriendRequestModel[]) => {
        console.log(receivedFriendRequests);
        this.receivedFriendRequests = receivedFriendRequests;
        this.receivedFriendRequestsLoaded = true;
      })
  }

  getSentFriendRequests() {
    this.sentFriendRequestsSubscription = this.friendRequestsService
      .getSentFriendRequests()
      .subscribe(
        (sentFriendRequests:SentFriendRequestModel[]) => {
          console.log(sentFriendRequests);
          this.sentFriendRequests = sentFriendRequests;
          this.sendFriendRequestsLoaded = true;
        }
      );
  }

  ngOnDestroy(): void {
    this.receivedFriendRequestsSubscription.unsubscribe();
    this.sentFriendRequestsSubscription.unsubscribe();
  }
}
