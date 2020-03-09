import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent, ReplaySubject} from 'rxjs';
import {debounceTime, map, takeUntil} from 'rxjs/operators';
import UserInterestModel from '../../models/user-interest.model';
import {FriendshipService} from '../../services/friendship.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-interests-input',
  templateUrl: './interests-input.component.html',
  styleUrls: ['./interests-input.component.scss']
})
export class InterestsInputComponent implements OnInit {
  @Input() styles;
  msBeforeRequest: number = 500;
  @ViewChild('inputElement') inputElement;
  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  foundInterests: UserInterestModel[];
  @Output() onInterestSelectEmitter: EventEmitter<UserInterestModel> = new EventEmitter();
  resultsVisible: boolean;

  constructor(private friendshipService: FriendshipService) { }

  ngOnInit() {
    fromEvent(this.inputElement.nativeElement, 'keyup').pipe(
      takeUntil(this.destroyed$),
      map((i: any) => i.currentTarget.value),
      debounceTime(this.msBeforeRequest)
    ).subscribe(value => {
     this.friendshipService
        .findInterestsByKeyword(value)
       .pipe(takeUntil(this.destroyed$))
       .subscribe((res: HttpResponse<any[]>) => {
          this.foundInterests = [];
          res.body.map(value => {
            this.foundInterests.push(new UserInterestModel(value.id, value.title));
          })})
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onClick(value: UserInterestModel) {
    this.onInterestSelectEmitter.emit(value);
    this.resultsVisible = false;
  }
}
