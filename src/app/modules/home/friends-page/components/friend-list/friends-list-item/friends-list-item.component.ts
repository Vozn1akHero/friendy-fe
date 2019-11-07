import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Friend from '../../../models/friend.model';

@Component({
  selector: 'app-friends-list-item',
  templateUrl: './friends-list-item.component.html',
  styleUrls: ['./friends-list-item.component.scss']
})
export class FriendsListItemComponent implements OnInit {
  @Input() friendData: Friend;
  @Output() removeFriendEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    console.log(this.friendData)
  }

  removeFriend(){

  }
}
