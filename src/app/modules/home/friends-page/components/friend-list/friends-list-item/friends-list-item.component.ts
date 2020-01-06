import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Friend from '../../../models/friend.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-friends-list-item',
  templateUrl: './friends-list-item.component.html',
  styleUrls: ['./friends-list-item.component.scss']
})
export class FriendsListItemComponent {
  @Input() friendData: Friend;
  @Output() removeFriendEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router : Router) { }

  navigateToDialog(){
    this.router.navigate(['/app/dialog'], {
      queryParams: {
        to: this.friendData.id
      }
    })
  }

  removeFriend(){
    this.removeFriendEvent.emit(this.friendData.id);
  }
}
