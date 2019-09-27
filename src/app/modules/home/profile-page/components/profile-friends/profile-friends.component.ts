import {Component, Input, OnInit} from '@angular/core';
import {ExemplaryFriend} from '../../models/exemplary-friend.model';

@Component({
  selector: 'app-profile-friends',
  templateUrl: './profile-friends.component.html',
  styleUrls: ['./profile-friends.component.scss']
})
export class ProfileFriendsComponent implements OnInit {
  @Input() exemplaryFriends: ExemplaryFriend[];

  constructor() { }

  ngOnInit() {
  }

}
