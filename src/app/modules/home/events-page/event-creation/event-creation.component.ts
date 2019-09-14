import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.scss'],
  animations: [
    trigger('anim', [
      transition(':enter', [
        style({
          opacity: '0'
        }),
        animate(
          '300ms ease-in',
          style({ opacity: '1' })
        )
      ]), transition(':leave', [
        style({
          opacity: '1'
        }),
        animate(
          '300ms ease-out',
          style({ opacity: '0' })
        )
      ])
    ])
  ]
})

export class EventCreationComponent implements OnInit {
  @Output() closeEventCreationPopup = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closePopup(){
    this.closeEventCreationPopup.emit();
  }
}
