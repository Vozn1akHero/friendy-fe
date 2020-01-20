import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserDataService} from '../../services/user-data.service';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';
import UserSafetyModel from '../../models/user-safety.model';

@Component({
  selector: 'app-user-safety-settings',
  templateUrl: './user-safety-settings.component.html',
  styleUrls: ['./user-safety-settings.component.scss']
})
export class UserSafetySettingsComponent implements OnInit, OnDestroy {
  newPassword: string;
  oldPassword: string;
  email: string;

  constructor(private userDataService: UserDataService,
              private subscriptionManager: SubscriptionManager) {
  }

  ngOnInit() {
    this.getEmail();
  }

  getEmail() {
    this.subscriptionManager.add(this.userDataService.userSafety$.subscribe((value: UserSafetyModel) => {
      this.email = value.email;
    }));
  }

  onNewPasswordSubmit() {
    this.subscriptionManager.add(this.userDataService.updatePassword(this.oldPassword, this.newPassword).subscribe());
  }

  onNewEmailSubmit() {
    this.subscriptionManager.add(this.userDataService.updateEmail(this.email).subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
