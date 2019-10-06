import {Component, Input, OnInit} from '@angular/core';
import ExemplaryFriend from '../../../models/exemplary-friend.model';

@Component({
  selector: 'app-profile-friends-item',
  templateUrl: './profile-friends-item.component.html',
  styleUrls: ['./profile-friends-item.component.scss']
})
export class ProfileFriendsItemComponent implements OnInit {
  @Input() exemplaryFriend: ExemplaryFriend;

  constructor() { }

  ngOnInit() {
  }

}
