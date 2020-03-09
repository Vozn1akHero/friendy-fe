import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDataService} from '../../services/user-data.service';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';
import EducationModel from '../../models/education.model';
import {InfoModalService} from '../../../../../shared/components/info-modal/info-modal.service';

@Component({
  selector: 'app-user-education-settings',
  templateUrl: './user-education-settings.component.html',
  styleUrls: ['./user-education-settings.component.scss']
})
export class UserEducationSettingsComponent implements OnInit, OnDestroy {
  userEducationForm = new FormGroup({
    education: new FormControl('', [Validators.required])
    /*school: new FormControl('', [Validators.required]),
    university: new FormControl('', [Validators.required])*/
  });

  education: EducationModel;

  updateEducationData(){
    const newEducation = new EducationModel(this.userEducationForm.value.education);
    this.subscriptionManager.add(this.userDataService.updateEducationData(newEducation).subscribe(value => {
      this.infoModalService.openWithMessage("Dane zostały zmienione")
    }))
  }

  constructor(private subscriptionManager: SubscriptionManager,
              private infoModalService: InfoModalService,
              private userDataService : UserDataService) { }

  ngOnInit() {
    this.getEducationData();
  }

  getEducationData(){
    this.subscriptionManager.add(this.userDataService.userEducation$.subscribe(value => {
      this.education = value;
    }))
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
