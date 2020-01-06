import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import EventDataModel from '../../models/event-data.model';
import {EventDataService} from '../../services/event-data.service';
import {Subscription} from 'rxjs';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';

@Component({
  selector: 'app-basic-event-settings',
  templateUrl: './basic-event-settings.component.html',
  styleUrls: ['./basic-event-settings.component.scss']
})
export class BasicEventSettingsComponent implements OnInit, OnDestroy {
  eventBasicSettingsForm = new FormGroup({
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
  showCalendar : boolean = false;
  @ViewChild('image') image;
  eventData: EventDataModel;
  hour: number;
  minute: number;
  loaded: boolean = false;
  @Input() eventId : number;

  constructor(private subscriptionManager : SubscriptionManager,
              private eventDataService : EventDataService) { }

  ngOnInit() {
    this.getData();
  }

  toggleCalendar(){
    this.showCalendar = !this.showCalendar;
  }

  getData(){
    this.subscriptionManager.add(this
      .eventDataService
      .getById(this.eventId)
      .subscribe(value => {
        this.loaded = true;
        this.eventData = value;
    }))
  }

  onBasicChangesFormSubmit(){
    const formData = this.eventBasicSettingsForm.value;
    const data = new EventDataModel(this.eventData.id,
      formData.title,
      formData.description,
      formData.street,
      formData.streetNumber,
      formData.city,
      formData.participantsAmount,
      formData.date,
      formData.hour,
      formData.minute,
      formData.entryPrice);
    this.subscriptionManager.add(this.eventDataService.update(data).subscribe(res => {

    }))
  }

  onSelectDate($event: string) {
    this.eventBasicSettingsForm.get('date').setValue($event);
    this.showCalendar = false;
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
