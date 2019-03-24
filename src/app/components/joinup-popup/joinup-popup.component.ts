import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-joinup-popup',
  templateUrl: './joinup-popup.component.html',
  styleUrls: ['./joinup-popup.component.scss']
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
