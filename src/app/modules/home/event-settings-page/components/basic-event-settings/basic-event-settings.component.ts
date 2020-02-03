import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import EventDataModel from '../../models/event-data.model';
import {EventDataService} from '../../services/event-data.service';
import {Subscription} from 'rxjs';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';
import NewEventDataModel from "../../models/new-event-data.model";

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
  //possibleHoursOpt: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0];

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

  changeAvatar(){
    const image = this.avatar.nativeElement;
    if(image.files && image.files[0]){
      this.eventDataService.changeAvatarById(this.eventData.id, image).subscribe(res => {

      })
    }
  }

  changeBackground(){
    const image = this.background.nativeElement;
    if(image.files && image.files[0]){
      this.eventDataService.changeBackgroundById(this.eventData.id, image).subscribe(res => {

      })
    }
  }

  changeTextData(){
    const formData = this.eventBasicSettingsForm.value;
    const data = new NewEventDataModel(this.eventData.id,
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
    this.eventDataService.update(data).subscribe(res => {

    });
  }

  onBasicChangesFormSubmit(){
    console.log(this.eventBasicSettingsForm.value)
    /*this.changeTextData();
    this.changeAvatar();
    this.changeBackground();*/
  }

  onSelectDate($event: string) {
    this.eventBasicSettingsForm.get('date').setValue($event);
    this.showCalendar = false;
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
