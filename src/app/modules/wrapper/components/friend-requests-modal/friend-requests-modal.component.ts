import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-friend-requests-modal',
  templateUrl: './friend-requests-modal.component.html',
  styleUrls: ['./friend-requests-modal.component.scss'],
  animations: [
    trigger('anim', [
      transition(':enter', [
        style({
          transform: 'translateY(-100%)'
        }),
        animate(
          '100ms ease-in',
          style({ transform: 'translateY(0)' })
        )
      ]),
      transition(':leave', [
        style({
          opacity: '1'
        }),
        animate(
          '100ms ease-out',
          style({ opacity: '0' })
        )
      ])
    ])
  ]
})
export class FriendRequestsModalComponent implements OnInit {
  chosenSubpage: string = "received-requests";
  //@Output() chosenSubpageChangeEmitter: EventEmitter<void> = new EventEmitter();
  sentEventSubpageChosenSubject: Subject<void> = new Subject<void>();


  constructor() { }

  ngOnInit() {
  }

  onReceivedFriendRequestsBtnClick(){
    this.chosenSubpage = "received-requests";
  }

  onSentFriendRequestsBtnClick(){
    this.chosenSubpage = "sent-requests";
    //this.chosenSubpageChangeEmitter.emit();
    this.sentEventSubpageChosenSubject.next();
  }
}
