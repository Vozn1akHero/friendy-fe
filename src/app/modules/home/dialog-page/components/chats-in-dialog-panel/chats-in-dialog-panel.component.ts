import {Component, OnDestroy, OnInit} from '@angular/core';
import {ExemplaryChatsService} from '../../services/exemplary-chats.service';
import ExemplaryChatModel from '../../models/exemplary-chat.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chats-in-dialog-panel',
  templateUrl: './chats-in-dialog-panel.component.html',
  styleUrls: ['./chats-in-dialog-panel.component.scss']
})
export class ChatsInDialogPanelComponent implements OnInit, OnDestroy {
  loaded: boolean = false;
  chats: ExemplaryChatModel[];
  chatsSubscription: Subscription;

  constructor(private exemplaryChatsService : ExemplaryChatsService) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.chatsSubscription = this.exemplaryChatsService.get().subscribe(value => {
      this.chats = value;
      this.loaded = true;
    })
  }

  ngOnDestroy(): void {
    this.chatsSubscription.unsubscribe();
  }
}
