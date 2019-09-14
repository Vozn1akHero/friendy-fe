import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'registration-success-pop-up',
  templateUrl: './registration-success-pop-up.component.html',
  styleUrls: ['./registration-success-pop-up.component.scss'],
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
      ])
    ])
  ]
})

export class RegistrationSuccessPopUpComponent implements OnInit {
  @Output() closeEventCreationPopup = new EventEmitter();

  ngOnInit(): void {
  }
}
