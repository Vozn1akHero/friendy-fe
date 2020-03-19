import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogHubService} from '../../../shared/services/dialog-hub.service';
import {takeUntil, takeWhile} from 'rxjs/operators';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {ScrollableListNotifierService} from "../../../shared/services/scrollable-list-notifier.service";
import {UserIdService} from '../../../shared/services/user-id.service';
import InterlocutorDataModel from './models/interlocutor-data.model';
import SubscriptionManager from '../../../shared/helpers/SubscriptionManager';
import * as DialogListActions from './store/dialog-list/dialog-list.actions';
import {Store} from '@ngrx/store';
import {AppState} from './store/reducers'

@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.scss'],
  providers: [ScrollableListNotifierService]
})
export class DialogPageComponent implements OnInit, OnDestroy {
  newMessage : FormGroup = new FormGroup({
    newMessageContent: new FormControl('',
      [Validators.required, Validators.minLength(1)]),
    image: new FormControl('')
  });
  loaded: boolean = false;
  userId: number;
  interlocutorData: InterlocutorDataModel;
  interlocutorSelected$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private unsubscribe$ = new Subject();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private subscriptionManager : SubscriptionManager,
              private userIdService: UserIdService,
              private store: Store<AppState>,
              private scrollableListNotifierService : ScrollableListNotifierService,
              private dialogHubService: DialogHubService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.userId = this.userIdService.userIdValue;
  }

  checkRoute(){
    this.store.dispatch(new DialogListActions.GetDialogList({page: 1}));
    this.subscriptionManager.add(this.store.select(state => state.fromDialogPageDialogList.dialogList)
      .subscribe(value => {
        const dialogList = value.length > 0 ? value[0]:null;
        if(this.route.snapshot.params.id == null){
          if(dialogList != null){
            this.router.navigate(['app/dialog/', dialogList.interlocutorId])
          }
        } else {
          const chatData = this.route.snapshot.data.chatData;
          if(dialogList != null && chatData == null){
            this.router.navigate(['app/dialog/', dialogList.interlocutorId])
          } else if(dialogList != null && chatData != null) {
            this.interlocutorData = this.route.snapshot.data.chatData.firstInterlocutor.id !== this.userId ?
              this.route.snapshot.data.chatData.firstInterlocutor
              : this.route.snapshot.data.chatData.secondInterlocutor;
            this.loaded = true;
          }
        }
      }))
  }

  ngOnInit() {
    this.checkRoute();
    this.activateDialogHub();
  }

  activateDialogHub(){
    this.interlocutorSelected$.pipe(takeUntil(this.unsubscribe$)).subscribe(value => {
      if(value){
        this.dialogHubService.connected$
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((value) => {
            if(value){
              this.dialogHubService.joinGroup(this.route.snapshot.data.chatData.id);
              this.dialogHubService.listenToNewMessage();
              this.dialogHubService.listenToNewLastMessage();
            }
          })
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
