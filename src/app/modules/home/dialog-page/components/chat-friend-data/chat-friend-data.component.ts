import {Component, OnDestroy, OnInit} from '@angular/core';
import InterlocutorDataModel from '../../models/interlocutor-data.model';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';
import {UserStatusService} from '../../services/user-status.service';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';

@Component({
  selector: 'app-chat-friend-data',
  templateUrl: './chat-friend-data.component.html',
  styleUrls: ['./chat-friend-data.component.scss']
})
export class ChatFriendDataComponent implements OnInit, OnDestroy {
  interlocutorData: InterlocutorDataModel;
  lastTimeOnline: string;

  constructor(private route: ActivatedRoute,
   private subscriptionManager : SubscriptionManager,
   private userStatusService : UserStatusService) { }

  ngOnInit() {
    this.interlocutorData = this.route.snapshot.data.interlocutorData;
    this.getStatus();
  }

  getStatus(){
    if(this.interlocutorData.session.sessionEnd==null) this.lastTimeOnline = moment(this.interlocutorData.session.sessionEnd).fromNow();
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
