import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {DialogService} from '../services/dialog.service';
import ChatFriendBasicData from '../models/interlocutor-data.model';

@Injectable()
export class InterlocutorDataResolver implements Resolve<ChatFriendBasicData> {
  constructor(private dialogService: DialogService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dialogService
      .getChatFriendData(route.queryParams.to);
  }
}
