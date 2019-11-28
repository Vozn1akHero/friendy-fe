import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  friendRequestsModalOpened: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  openFriendRequestsModal(){
    this.friendRequestsModalOpened = true;
  }

  closeFriendRequestsModal(){
    this.friendRequestsModalOpened = false;
  }
}
