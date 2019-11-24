import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {EventPostService} from '../../../services/event-post.service';
import EventPost from '../../../models/event-post.model';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../core/ngrx/store/app.reducer';
import EventAvatar from '../../../models/event-avatar.model';
import {EventAvatarService} from '../../../services/event-avatar.service';

@Component({
  selector: 'app-event-post-list',
  templateUrl: './event-post-list.component.html',
  styleUrls: ['./event-post-list.component.scss']
})
export class EventPostListComponent implements OnInit, OnDestroy {
  posts: EventPost[];
  postsSubscription: Subscription;
  eventId:number;
  eventAvatar$: Observable<EventAvatar>;
  @Input() isEventAdmin: boolean;

  constructor(private eventPostService : EventPostService,
              private eventAvatarService : EventAvatarService,
              private store: Store<fromApp.AppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventAvatar$ = this.eventAvatarService.eventAvatar$;
    this.eventId = +this.route.snapshot.paramMap.get("id");
    this.getPosts();
  }

  getPosts(){
    this.postsSubscription = this.eventPostService.getByEventId(this.eventId, 1)
      .subscribe(res => {
        this.posts = res
    })
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }
}
