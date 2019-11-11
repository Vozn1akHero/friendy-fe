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
  @Input() avatarUrl : string;

/*  eventAvatar: EventAvatar = null;
  eventAvatarSubscription: Subscription;
  eventAvatarLoading$: Observable<boolean>;*/

  eventId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private eventAvatarService : EventAvatarService,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    //this.eventId = +this.activatedRoute.snapshot.paramMap.get("id");

    //this.getEventAvatar();
  }

  getEventAvatar(){
    /*this.eventAvatarSubscription = this.eventAvatarService.getEventData(this.eventId)
      .subscribe(value => {
        const eventAvatar : any = value.body;
        this.eventAvatar = new EventAvatar(eventAvatar);
    });*/
    /*if(this.eventAvatar == null){
      this.store.dispatch(new EventPageEventAvatarActions
        .GetEventAvatar({id: this.eventId}));
    }

    this.eventAvatarLoading$ = this.store.select(state => state.eventPageEventAvatar.loading);

    this.eventAvatarSubscription = this.store.select(state => state.eventPageEventAvatar.eventAvatars)
      .subscribe(avatars => {
        for(let avatar of avatars){
          if(avatar.eventId === this.eventId){
            this.eventAvatar = avatar;
          }
        }
      });*/
  }

  ngOnDestroy(): void {
    //this.eventAvatarSubscription.unsubscribe();
  }
}
