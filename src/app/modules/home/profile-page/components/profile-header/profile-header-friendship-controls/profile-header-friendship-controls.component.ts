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
      .subscribe(response => {
        this.friendshipStatus = response.body as boolean;
        if(!this.friendshipStatus){
          this.setFriendRequestStatus();
        }
      })
  }

  setFriendRequestStatus(){
    this.friendRequestStatusSubscription = this.friendshipService
      .getFriendRequestStatus(this.userId)
      .subscribe(response => {
        this.friendRequestStatus = response.body as boolean;
      }, (error) => {
        alert(error);
      })
  }

  onSendFriendRequestBtnClick(){
    this.friendRequestStatusSubscription = this.friendshipService
      .sendFriendRequest(this.userId)
      .subscribe(response => {
        this.friendRequestStatus = true;
      }, (error) => {
        alert(error);
      })
  }

  onRemoveFriendRequestBtnClick(){
    this.friendRequestStatusSubscription = this.friendshipService
      .removeFriendRequest(this.userId)
      .subscribe(response => {
        this.friendRequestStatus = false;
      }, (error) => {
        alert(error);
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
