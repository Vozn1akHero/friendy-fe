import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FriendRequestsModalService} from './services/friend-requests-modal.service';
import {Observable, Subscription} from 'rxjs';
import {UserIdService} from '../../shared/services/user-id.service';
import {UserStatusService} from './services/user-status.service';
import SubscriptionManager from '../../shared/helpers/SubscriptionManager';
import {InfoModalService} from '../../shared/components/info-modal/info-modal.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {
  friendRequestsModalOpened: boolean;
  userIdLoaded$: Observable<boolean>;
  connectedToStatusHub: boolean = false;
  infoModalOpened$: Observable<boolean>;
  receivedFriendRequestsAmount: number;

  constructor(private route: ActivatedRoute,
              private successModalService : InfoModalService,
              private userStatusService : UserStatusService,
              private subscriptionManager : SubscriptionManager,
              private userIdService: UserIdService,
              private friendRequestsModalService : FriendRequestsModalService) {
    this.infoModalOpened$ = this.successModalService.opened$;
    this.setFriendRequestModalValue();
  }

  ngOnInit() {
    this.setUserIdLoaded();
    this.setConnectedStatus();
    this.getSentFriendRequests();
  }

  setConnectedStatus(){
    this.subscriptionManager.add(this.userStatusService.connected$.subscribe(connected => {
      if(connected){
        this.userStatusService.setConnectedState(this.route.snapshot.data["profileId"]);
      }
    }));
    this.subscriptionManager.add(this.userStatusService.connectedMethodExecuted$.subscribe(value => {
      this.connectedToStatusHub = value;
    }))
  }

  setFriendRequestModalValue(){
    this.subscriptionManager.add(
      this.friendRequestsModalService
        .modalOpened$
        .subscribe(value => {
          this.friendRequestsModalOpened = value;
        })
    )
  }

  setUserIdLoaded(){
    this.userIdLoaded$ = this.userIdService.userIdLoaded$;
  }

  getSentFriendRequests() {
    this.friendRequestsModalService
      .getReceivedFriendRequests();
    this.subscriptionManager.add(this.friendRequestsModalService.receivedFriendRequests$.subscribe(value => {
      this.receivedFriendRequestsAmount = value.length;
    }))
  }

  openFriendRequestsModal(){
    this.friendRequestsModalService.modalOpened = true;
    this.friendRequestsModalOpened = true;
  }

  closeFriendRequestsModal(){
    this.friendRequestsModalService.modalOpened = false;
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
