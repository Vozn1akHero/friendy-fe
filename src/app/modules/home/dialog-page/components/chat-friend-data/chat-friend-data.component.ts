import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import InterlocutorDataModel from '../../models/interlocutor-data.model';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';

@Component({
  selector: 'app-chat-friend-data',
  templateUrl: './chat-friend-data.component.html',
  styleUrls: ['./chat-friend-data.component.scss']
})
export class ChatFriendDataComponent implements OnInit, OnDestroy {
  @Input() interlocutorData: InterlocutorDataModel;
  isOnline: boolean;
  lastTimeOnline: string;
  @Input() userId: number;

  constructor(private route: ActivatedRoute,
   private subscriptionManager : SubscriptionManager) { }

  ngOnInit() {
    if(this.interlocutorData.session.sessionEnd!=null) {
      this.lastTimeOnline = moment(this.interlocutorData.session.sessionEnd).fromNow();
      this.isOnline = false;
    } else {
      this.isOnline = true;
    }
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
