import {Component, Input, OnInit} from '@angular/core';
import SuggestedFriendModel from '../../../models/suggested-friend.model';

@Component({
  selector: 'app-suggested-friends-item',
  templateUrl: './suggested-friends-item.component.html',
  styleUrls: ['./suggested-friends-item.component.scss']
})
export class SuggestedFriendsItemComponent implements OnInit {
  @Input() suggestedFriend: SuggestedFriendModel;

  constructor() { }

  ngOnInit() {
  }

}
