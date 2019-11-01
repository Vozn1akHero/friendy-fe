import {Component, OnInit} from '@angular/core';
import InterlocutorDataModel from '../../models/interlocutor-data.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat-friend-data',
  templateUrl: './chat-friend-data.component.html',
  styleUrls: ['./chat-friend-data.component.scss']
})
export class ChatFriendDataComponent implements OnInit {
  interlocutorData: InterlocutorDataModel;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.interlocutorData = this.route.snapshot.data.interlocutorData;
  }
}
