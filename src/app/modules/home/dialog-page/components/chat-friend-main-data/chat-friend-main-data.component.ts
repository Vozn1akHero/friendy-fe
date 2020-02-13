import { Component, OnInit } from '@angular/core';
import InterlocutorDataModel from '../../models/interlocutor-data.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat-friend-main-data',
  templateUrl: './chat-friend-main-data.component.html',
  styleUrls: ['./chat-friend-main-data.component.scss']
})
export class ChatFriendMainDataComponent implements OnInit {
  interlocutorData: InterlocutorDataModel;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.interlocutorData = this.route.snapshot.data.interlocutorData;
  }

}
