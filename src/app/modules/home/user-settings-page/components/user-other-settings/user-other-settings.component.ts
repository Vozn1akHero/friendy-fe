import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import BasicUserDataModel from '../../models/basic-user-data.model';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';
import {UserDataService} from '../../services/user-data.service';
import AdditionalInfoModel from '../../models/additional-info.model';

@Component({
  selector: 'app-user-other-settings',
  templateUrl: './user-other-settings.component.html',
  styleUrls: ['./user-other-settings.component.scss']
})
export class UserOtherSettingsComponent implements OnInit {
  addInfForm = new FormGroup({
    maritalStatus: new FormControl('', [Validators.required]),
    religion: new FormControl('', [Validators.required]),
    alcoholAttitude: new FormControl('', [Validators.required]),
    smokingAttitude: new FormControl('', [Validators.required]),
  });

  additionalUserData: AdditionalInfoModel;

  updateEducationData(){
    const addData = new AdditionalInfoModel(this.addInfForm.value.maritalStatus,
      this.addInfForm.value.religion,
      this.addInfForm.value.smokingAttitude,
      this.addInfForm.value.alcoholAttitude);
    this.subscriptionManager.add(this.userDataService.updateAdditionalData(addData).subscribe(value => {

    }))
  }

  constructor(private subscriptionManager: SubscriptionManager,
              private userDataService : UserDataService) { }

  ngOnInit() {
    this.getEducationData();
  }

  getEducationData(){
    this.subscriptionManager.add(this.userDataService.userAdditionalInfo$.subscribe(value => {
      this.additionalUserData = value;
    }))
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }

}
