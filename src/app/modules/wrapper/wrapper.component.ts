import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  friendRequestsModalOpened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openFriendRequestsModal(){
    this.friendRequestsModalOpened = true;
  }

  closeFriendRequestsModal(){
    this.friendRequestsModalOpened = false;
  }
}
