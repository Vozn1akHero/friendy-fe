import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FriendRequestsService} from '../../../../services/friend-requests.service';
import {Observable, Subscription} from 'rxjs';
import ReceivedFriendRequestModel from '../../../../models/received-friend-request.model';
import SentFriendRequestModel from '../../../../models/sent-friend-request.model';

@Component({
  selector: 'app-received-friend-request-list',
  templateUrl: './received-friend-request-list.component.html',
  styleUrls: ['./received-friend-request-list.component.scss']
})
export class ReceivedFriendRequestListComponent implements OnInit {
  @Input() receivedFriendRequests: ReceivedFriendRequestModel[];

  constructor() {}

  ngOnInit() {

  }

}
