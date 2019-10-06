import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.scss'],
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
export class CommonModalComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
