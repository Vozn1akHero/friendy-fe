import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogHubService} from '../../../shared/services/dialog-hub.service';
import {takeUntil} from 'rxjs/operators';
import {BehaviorSubject, Subject} from 'rxjs';
import {ScrollableListNotifierService} from "../../../shared/services/scrollable-list-notifier.service";

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
  interlocutorSelected$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private unsubscribe$ = new Subject();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private scrollableListNotifierService : ScrollableListNotifierService,
              private dialogHubService: DialogHubService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.interlocutorSelected$.next(this.route.snapshot.params.id != null);
  }

  ngOnInit() {
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
