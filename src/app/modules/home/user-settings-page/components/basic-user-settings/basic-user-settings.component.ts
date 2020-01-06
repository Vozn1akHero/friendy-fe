import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import EducationModel from '../../models/education.model';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';
import {UserDataService} from '../../services/user-data.service';
import BasicUserDataModel from '../../models/basic-user-data.model';

@Component({
  selector: 'app-basic-user-settings',
  templateUrl: './basic-user-settings.component.html',
  styleUrls: ['./basic-user-settings.component.scss']
})
export class BasicUserSettingsComponent implements OnInit {
  userBasicSettingsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  });

  showCalendar: boolean = false;

  toggleCalendar(){
    this.showCalendar = !this.showCalendar;
  }

  onSelectBirthday($event){
    this.userBasicSettingsForm.setValue({birthday: $event});
  }

  basicUserData: BasicUserDataModel;

  updateEducationData(){
    const basicUserData = new BasicUserDataModel(this.basicUserData.id,
      this.userBasicSettingsForm.value.name,
      this.userBasicSettingsForm.value.surname,
      this.userBasicSettingsForm.value.birthday,
      this.userBasicSettingsForm.value.gender);
    this.subscriptionManager.add(this.userDataService.updateBasicData(basicUserData).subscribe(value => {

    }))
  }

  constructor(private subscriptionManager: SubscriptionManager,
              private userDataService : UserDataService) { }

  ngOnInit() {
    this.getEducationData();
  }

  getEducationData(){
    this.subscriptionManager.add(this.userDataService.userBasicData$.subscribe(value => {
      this.basicUserData = value;
      this.basicUserData.birthday = value.birthday.split('T')[0];
    }))
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
