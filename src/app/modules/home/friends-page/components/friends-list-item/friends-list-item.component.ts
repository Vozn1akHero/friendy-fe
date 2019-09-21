import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-friends-list-item',
  templateUrl: './friends-list-item.component.html',
  styleUrls: ['./friends-list-item.component.scss']
})
export class FriendsListItemComponent implements OnInit {
  @Input() friendData: any;
  @Output() removeFriendEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    console.log(this.friendData)
  }

  removeFriend(){

  }
}
