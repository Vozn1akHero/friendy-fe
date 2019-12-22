import {Component, Input, OnInit} from '@angular/core';
import ExemplaryFriend from '../../../models/exemplary-friend.model';

@Component({
  selector: 'app-profile-friends-item',
  templateUrl: './profile-exemplary-friend.component.html',
  styleUrls: ['./profile-exemplary-friend.component.scss']
})
export class ProfileExemplaryFriendComponent implements OnInit {
  @Input() exemplaryFriend: ExemplaryFriend;

  constructor() { }

  ngOnInit() {
  }

}
