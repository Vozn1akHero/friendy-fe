import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventCreationService} from '../../services/event-creation.service';
import EventCreationModel from '../../models/event-creation.model';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';
import {Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.scss']
})

export class EventCreationComponent implements OnDestroy {
  @Output() closeEventCreationPopup = new EventEmitter();

  eventCreationForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    streetNumber: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    hour: new FormControl('', [Validators.required]),
    minute: new FormControl('', [Validators.required]),
    entryPrice: new FormControl('', [Validators.required]),
    participantsAmount: new FormControl('', [Validators.required])
  });

  calendarVisible: boolean = false;

  constructor(private eventCreationService : EventCreationService,
              private router: Router,
              private subscriptionManager : SubscriptionManager){}

  setDate(date: string){
    this.calendarVisible = false;
    this.eventCreationForm.controls['date'].setValue(date);
  }

  closePopup(){
    this.closeEventCreationPopup.emit();
  }

  onSubmit(){
    const formVal = this.eventCreationForm.value;
    const date = moment(`${formVal.date} ${formVal.hour}:${formVal.minute}:00`,'DD.MM.YYYY HH:mm:ss').toDate();
    const event : EventCreationModel = new EventCreationModel(formVal.title,
      formVal.description,
      formVal.street,
      formVal.streetNumber,
      formVal.city,
      formVal.participantsAmount,
      date);
    this.subscriptionManager.add(this.eventCreationService.create(event).subscribe((value: any) => {
      this.router.navigate(['/app/event', value.id])
    }));
  }

  showCalendar() {
    this.calendarVisible = true;
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
