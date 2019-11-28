import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FriendRequestsModalService} from './services/friend-requests-modal.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {
  friendRequestsModalOpened: boolean;
  friendRequestsModalOpenedSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private friendRequestsModalService : FriendRequestsModalService) {
    this.setFriendRequestModalValue();
  }

  ngOnInit() {

  }

  setFriendRequestModalValue(){
    this.friendRequestsModalOpenedSubscription = this.friendRequestsModalService.modalOpened$.subscribe(value => {
      this.friendRequestsModalOpened = value;
    })
  }

  openFriendRequestsModal(){
    this.friendRequestsModalService.modalOpened = true;
    this.friendRequestsModalOpened = true;
  }

  closeFriendRequestsModal(){
    this.friendRequestsModalService.modalOpened = false;
  }

  ngOnDestroy(): void {
    this.friendRequestsModalOpenedSubscription.unsubscribe();
  }
}
