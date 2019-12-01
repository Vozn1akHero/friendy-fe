import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-basic-user-settings',
  templateUrl: './basic-user-settings.component.html',
  styleUrls: ['./basic-user-settings.component.scss']
})
export class BasicUserSettingsComponent implements OnInit {
  userBasicSettings = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required])
  });

  showCalendar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCalendar(){
    this.showCalendar = !this.showCalendar;
  }

  onSelectBirthday($event){

  }

  userBasicSettingsSubmit(){

  }
}
