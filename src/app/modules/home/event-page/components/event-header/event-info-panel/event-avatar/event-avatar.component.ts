import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import EventAvatar from '../../../../models/event-avatar.model';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../../core/ngrx/store/app.reducer';
import {ActivatedRoute} from '@angular/router';
import {EventAvatarService} from '../../../../services/event-avatar.service';


@Component({
  selector: 'app-event-avatar',
  templateUrl: './event-avatar.component.html',
  styleUrls: ['./event-avatar.component.scss']
})
export class EventAvatarComponent implements OnInit, OnDestroy {
  @Input() activeSettings;
  @Input() eventId: number;

  //avatar: Observable<EventAvatar>;
  @Input() avatarUrl;

  constructor(private activatedRoute: ActivatedRoute,
              private eventAvatarService : EventAvatarService) { }

  ngOnInit() {
    //this.getEventAvatar();
  }

 /* getEventAvatar() {
    this.eventAvatarService.get(this.eventId);
    this.avatar = this.eventAvatarService.eventAvatar$
  }*/

  ngOnDestroy(): void {

  }
}
