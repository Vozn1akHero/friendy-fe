import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FriendshipService} from '../../../services/friendship.service';

@Component({
  selector: 'app-profile-header-friendship-controls',
  templateUrl: './profile-header-friendship-controls.component.html',
  styleUrls: ['./profile-header-friendship-controls.component.scss']
})
export class ProfileHeaderFriendshipControlsComponent implements OnInit {
  @Input() userId: number;
  loaded: boolean = false;
  removeFriendRequestBtnInfoModalOpened: boolean;
  addFriendRequestBtnInfoModalOpened: boolean;
  friendshipStatus: boolean = false;
  friendshipStatusSubscription: Subscription;
  friendRequestStatus: boolean = false;
  friendRequestStatusSubscription: Subscription;

  constructor(private friendshipService : FriendshipService) { }

  ngOnInit() {
    this.setFriendshipStatus();
  }

  setFriendshipStatus(){
    this.friendshipStatusSubscription = this.friendshipService
      .checkIfFriendByUserId(this.userId)
      .subscribe(value => {
        this.finalFriendshipStatus = value;

        if(!this.friendshipStatus){
          this.setFriendRequestStatus();
        }
      })
  }

  set finalFriendshipStatus(value: boolean){
    this.friendshipStatus = value;
    this.loaded = true;
  }

  set finalFriendRequestStatus(value: boolean){
    this.friendRequestStatus = value;
    this.loaded = true;
  }

  setFriendRequestStatus(){
    this.friendRequestStatusSubscription = this.friendshipService
      .getFriendRequestStatus(this.userId)
      .subscribe(value => {
        this.finalFriendRequestStatus = value;
      })
  }

  onSendFriendRequestBtnClick(){
    this.friendRequestStatusSubscription = this.friendshipService
      .sendFriendRequest(this.userId)
      .subscribe(() => {
        this.friendRequestStatus = true;
      })
  }

  onRemoveFriendRequestBtnClick(){
    this.friendRequestStatusSubscription = this.friendshipService
      .removeFriendRequest(this.userId)
      .subscribe(() => {
        this.friendRequestStatus = false;
      })
  }

  openButtonHoverInfoModal(option){
    switch (option) {
      case 'removeFriendRequestButton':
        this.removeFriendRequestBtnInfoModalOpened = true;
        break;
      case 'addFriendRequestButton':
        this.addFriendRequestBtnInfoModalOpened = true;
        break;
      default:
        break;
    }
  }

  closeButtonHoverInfoModal(option){
    switch (option) {
      case 'removeFriendRequestButton':
        this.removeFriendRequestBtnInfoModalOpened = false;
        break;
      case 'addFriendRequestButton':
        this.addFriendRequestBtnInfoModalOpened = false;
        break;
      default:
        break;
    }
  }
}
