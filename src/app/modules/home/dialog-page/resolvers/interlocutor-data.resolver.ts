import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import InterlocutorDataModel from '../models/interlocutor-data.model';
import {DialogService} from '../services/dialog.service';

@Injectable()
export class InterlocutorDataResolver implements Resolve<InterlocutorDataModel> {
  constructor(private dialogService: DialogService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dialogService
      .getChatFriendData(route.params.chatHash);
  }
}
