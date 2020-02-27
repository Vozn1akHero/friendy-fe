import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-friend-requests-modal',
  templateUrl: './friend-requests-modal.component.html',
  styleUrls: ['./friend-requests-modal.component.scss'],
  animations: [
    trigger('anim', [
      transition(':enter', [
        style({
          left: '-100%'
        }),
        animate(
          '122ms ease-in',
          style({ left: '0' })
        )
      ])
    ])
  ]
})
export class FriendRequestsModalComponent implements OnInit, OnDestroy {
  chosenSubpage: string;
  @Output() closeModalEmitter: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.chosenSubpage = "received-requests";
  }

  ngOnInit() {
    this.chosenSubpage = "received-requests";
  }

  onReceivedFriendRequestsBtnClick(){
    this.chosenSubpage = "received-requests";
  }

  onSentFriendRequestsBtnClick(){
    this.chosenSubpage = "sent-requests";
  }

  ngOnDestroy(): void {

  }

  close() {
    this.closeModalEmitter.emit();
  }
}
