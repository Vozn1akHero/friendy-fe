import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {animate, group, query, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-joinup-popup',
  templateUrl: './joinup-popup.component.html',
  styleUrls: ['./joinup-popup.component.scss'],
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

export class JoinupPopupComponent implements OnInit {
  joinUpForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    birthdayYear: new FormControl(''),
    birthdayDay: new FormControl(''),
    birthdayMonth: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  @Output() closePopUp = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeJoinUpPopup(){
    this.closePopUp.emit();
  }
  
  onSubmit(){

  }

}
