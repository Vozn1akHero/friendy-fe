import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import Cookies from 'js-cookie';
import {Subscription} from 'rxjs';
import {UserDataService} from './services/user-data.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  friendRequestsModalOpened: boolean = false;
  profileIdSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private userDataService : UserDataService) { }

  ngOnInit() {
    console.log(this.route.snapshot.data.receivedFriendRequests)
    console.log(this.route.snapshot.data.sentFriendRequests)

    this.setProfileId();
  }

  openFriendRequestsModal(){
    this.friendRequestsModalOpened = true;
  }

  closeFriendRequestsModal(){
    this.friendRequestsModalOpened = false;
  }

  setProfileId(){
    Cookies.set('pid', this.route.snapshot.data.profileId);
  }
}
