import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';
import {UserDataService} from '../../services/user-data.service';
import BasicUserDataModel from '../../models/basic-user-data.model';
import City from '../../../../../shared/models/city.model';
import {InfoModalService} from '../../../../../shared/components/info-modal/info-modal.service';

@Component({
  selector: 'app-basic-user-settings',
  templateUrl: './basic-user-settings.component.html',
  styleUrls: ['./basic-user-settings.component.scss']
})
export class BasicUserSettingsComponent implements OnInit, OnDestroy {
  userBasicSettingsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl(0, [Validators.required])
  });

  showCalendar: boolean = false;
  chosenCity: City;

  toggleCalendar(){
    this.showCalendar = !this.showCalendar;
  }

  onSelectBirthday($event){
    this.userBasicSettingsForm.get('birthday').setValue($event);
    this.showCalendar = false;
    this.basicUserData.birthday = $event;
  }

  basicUserData: BasicUserDataModel;

  updateData(){
    const basicUserData = new BasicUserDataModel(this.basicUserData.id,
      this.userBasicSettingsForm.value.name,
      this.userBasicSettingsForm.value.surname,
      this.userBasicSettingsForm.value.birthday,
      this.userBasicSettingsForm.value.gender,
      this.chosenCity);

    this.subscriptionManager.add(this.userDataService.updateBasicData(basicUserData).subscribe(value => {
      this.infoModalService.openWithMessage("Dane zostały zmienione")
    }))
  }

  constructor(private subscriptionManager: SubscriptionManager,
              private infoModalService: InfoModalService,
              private userDataService : UserDataService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.subscriptionManager.add(this.userDataService.userBasicData$.subscribe(value => {
      this.basicUserData = value;
      this.basicUserData.birthday = value.birthday.split('T')[0];
      this.chosenCity = value.city;
    }))
  }

  onSelectCity(city: City){
    this.chosenCity = city;
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
