import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FriendRequestsModalService} from './services/friend-requests-modal.service';
import {Observable, Subscription} from 'rxjs';
import {UserIdService} from '../../shared/services/user-id.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {
  friendRequestsModalOpened: boolean;
  friendRequestsModalOpenedSubscription: Subscription;
  userIdLoaded$: Observable<boolean>;

  constructor(private route: ActivatedRoute,
              private userIdService: UserIdService,
              private friendRequestsModalService : FriendRequestsModalService) {
    this.setFriendRequestModalValue();
  }

  ngOnInit() {
    this.setUserIdLoaded();
  }

  setFriendRequestModalValue(){
    this.friendRequestsModalOpenedSubscription = this.friendRequestsModalService.modalOpened$.subscribe(value => {
      this.friendRequestsModalOpened = value;
    })
  }

  setUserIdLoaded(){
    this.userIdLoaded$ = this.userIdService.userIdLoaded$;
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
