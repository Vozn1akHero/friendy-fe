import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-transparent-bg-modal',
  templateUrl: './transparent-bg-modal.component.html',
  styleUrls: ['./transparent-bg-modal.component.scss'],
  animations: [
    trigger('anim', [
      transition(':enter', [
        style({
          opacity: '0'
        }),
        animate(
          '75ms ease-in',
          style({ opacity: '1' })
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
export class TransparentBgModalComponent implements OnInit {
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModal(){
    this.closeModalEvent.emit();
  }
}
