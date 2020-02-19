import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import EventDataModel from '../../models/event-data.model';
import {EventDataService} from '../../services/event-data.service';
import * as moment from 'moment';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';
import NewEventDataModel from "../../models/new-event-data.model";
import {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import * as EventDataActions from '../../store/event-data/event-data.actions'

@Component({
  selector: 'app-basic-event-settings',
  templateUrl: './basic-event-settings.component.html',
  styleUrls: ['./basic-event-settings.component.scss']
})
export class BasicEventSettingsComponent implements OnInit, OnDestroy {
  eventBasicSettingsForm : FormGroup = new FormGroup({
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
  eventData: EventDataModel;
  hour: number;
  minute: number;
  loaded: boolean = false;
  @Input() eventId : number;
  @ViewChild('avatar') avatar : ElementRef;
  @ViewChild('background') background : ElementRef;
  currentEventDate: BehaviorSubject<string>;

  eventData$: Observable<EventDataModel>;
  loaded$: Observable<boolean>;
  //possibleHoursOpt: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0];

  constructor(private subscriptionManager : SubscriptionManager,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.getData();
  }

  toggleCalendar(){
    this.showCalendar = !this.showCalendar;
  }

  getData(){
    this.store.dispatch(new EventDataActions.GetEventData({eventId: this.eventId}));
    this.eventData$ = this.store.select(e=>e.eventSettingsPageBasicData.eventBasicData[this.eventId]);
    this.loaded$ = this.store.select(e=>e.eventSettingsPageBasicData.loaded);
    this.subscriptionManager.add(this.store.select(e=>e.eventSettingsPageBasicData.eventBasicData[this.eventId])
      .subscribe(value => {
        if(value) this.currentEventDate = new BehaviorSubject(value.date.toString())
    }))
  }

  changeAvatar(){
    const image = this.avatar.nativeElement;
    if(image.files && image.files[0]){
      this.store.dispatch(new EventDataActions
        .UpdateAvatar({eventId: this.eventId,
          image: image.files[0]}));
    }
  }

  changeBackground(){
    const image = this.background.nativeElement;
    if(image.files && image.files[0]){
      this.store.dispatch(new EventDataActions
        .UpdateBackground({eventId: this.eventId,
        image: image.files[0]}));
    }
  }

  changeTextData(){
    const formData = this.eventBasicSettingsForm.value;
    const date = moment(`${formData.date} ${formData.hour}:${formData.minute}`,
      'YYYY-MM-DD HH:mm').toDate();
    const data = new NewEventDataModel(this.eventId,
      formData.title,
      formData.description,
      formData.street,
      formData.streetNumber,
      formData.city,
      formData.participantsAmount,
      date,
      formData.entryPrice);
    this.store.dispatch(new EventDataActions.UpdateData(data));
  }

  onBasicChangesFormSubmit(){
    this.changeTextData();
    this.changeAvatar();
    this.changeBackground();
  }

  onSelectDate($event: string) {
    this.eventBasicSettingsForm.get('date').setValue($event);
    this.currentEventDate.next($event);
    this.showCalendar = false;
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
