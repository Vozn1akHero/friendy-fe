import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import FoundUserModel from '../../../models/found-user.model';
import {FriendsSearchService} from '../../../services/friends-search.service';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-found-user-item',
  templateUrl: './found-user-item.component.html',
  styleUrls: ['./found-user-item.component.scss']
})
export class FoundUserItemComponent implements OnInit, OnDestroy {
  @Input() foundUserData: FoundUserModel;

  friendshipStatus: boolean;
  friendshipStatusSubscription: Subscription;

  constructor(private friendsSearchService: FriendsSearchService) { }

  ngOnInit() {
    this.friendshipStatusSubscription = this.friendsSearchService
      .checkIfFriendByUserId(this.foundUserData.id)
      .subscribe(response => {
        this.friendshipStatus = response.body as boolean;
      })
  }

  ngOnDestroy(): void {
    this.friendshipStatusSubscription.unsubscribe();
  }

}