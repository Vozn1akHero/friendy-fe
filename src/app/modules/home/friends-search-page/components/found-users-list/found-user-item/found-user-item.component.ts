import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import FoundUserModel from '../../../models/found-user.model';
import {FriendsSearchService} from '../../../services/friends-search.service';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-found-user-item',
  templateUrl: './found-user-item.component.html',
  styleUrls: ['./found-user-item.component.scss']
})
export class FoundUserItemComponent implements OnInit, OnDestroy {
  removeFriendRequestBtnInfoModalOpened: boolean;
  addFriendRequestBtnInfoModalOpened: boolean;

  @Input() foundUserData: FoundUserModel;

  friendshipStatus: boolean = false;
  friendshipStatusSubscription: Subscription;

  friendRequestStatus: boolean = false;
  friendRequestStatusSubscription: Subscription;

  constructor(private friendsSearchService: FriendsSearchService) { }

  ngOnInit() {
    //this.setFriendshipStatus();
  }

  /*setFriendshipStatus(){
    this.friendshipStatusSubscription = this.friendsSearchService
      .checkIfFriendByUserId(this.foundUserData.id)
      .subscribe(response => {
        this.friendshipStatus = response.body as boolean;
        if(!this.friendshipStatus){
          this.setFriendRequestStatus();
        }
      })
  }

  setFriendRequestStatus(){
    this.friendRequestStatusSubscription = this.friendsSearchService
      .getFriendRequestStatus(this.foundUserData.id)
      .subscribe(response => {
        this.friendRequestStatus = response.body as boolean;
        console.log(this.friendRequestStatus)
      }, (error) => {
        alert(error);
      })
  }

  onSendFriendRequestBtnClick(){
    this.friendRequestStatusSubscription = this.friendsSearchService
      .sendFriendRequest(this.foundUserData.id)
      .subscribe(response => {
        this.friendRequestStatus = true;
      }, (error) => {
        alert(error);
      })
  }

  onRemoveFriendRequestBtnClick(){
    this.friendRequestStatusSubscription = this.friendsSearchService
      .removeFriendRequest(this.foundUserData.id)
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
  }*/

  ngOnDestroy(): void {
    this.friendshipStatusSubscription.unsubscribe();

    if(this.friendRequestStatusSubscription != null){
      this.friendRequestStatusSubscription.unsubscribe();
    }
  }
}
