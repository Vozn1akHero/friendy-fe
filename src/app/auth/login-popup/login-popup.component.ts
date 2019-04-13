import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
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
export class LoginPopupComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  @Output() closePopUp = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeLogInPopup() {
    this.closePopUp.emit();
  }

}
