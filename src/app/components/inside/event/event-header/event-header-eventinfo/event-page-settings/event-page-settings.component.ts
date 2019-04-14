import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-event-page-settings',
  templateUrl: './event-page-settings.component.html',
  styleUrls: ['./event-page-settings.component.scss'],
  animations: [
    trigger('anim', [
      transition(':enter', [
        style({
          right: '-100%'
        }),
        animate(
          '100ms',
          style({ right: '0' })
        )
      ]),
      transition(':leave', [
        style({
          right: '0'
        }),
        animate(
          '100ms',
          style({ right: '-100%' })
        )
      ])
    ])
  ]
})
export class EventPageSettingsComponent implements OnInit {
  @Input() activeSettings;

  constructor() { }

  ngOnInit() {
  }
}
