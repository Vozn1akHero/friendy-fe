import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-basic-event-settings',
  templateUrl: './basic-event-settings.component.html',
  styleUrls: ['./basic-event-settings.component.scss']
})
export class BasicEventSettingsComponent implements OnInit {
  eventBasicSettingsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    streetNumber: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    month: new FormControl('', [Validators.required]),
    day: new FormControl('', [Validators.required]),
    hour: new FormControl('', [Validators.required]),
    minute: new FormControl('', [Validators.required]),
    entryPrice: new FormControl('', [Validators.required]),
    participantsAmount: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  onBasicChangesFormSubmit(){

  }
}
