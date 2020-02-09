import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {DialogService} from '../services/dialog.service';
import ChatData from '../models/chat-data.model';

@Injectable()
export class ChatDataResolver implements Resolve<ChatData> {
  constructor(private dialogService: DialogService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dialogService
      .getChatData(route.queryParams.to);
  }
}
