import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserDataService} from '../../services/user-data.service';
import SubscriptionManager from '../../../../../shared/helpers/SubscriptionManager';
import UserSafetyModel from '../../models/user-safety.model';
import {InfoModalService} from '../../../../../shared/components/info-modal/info-modal.service';

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
              private infoModalService: InfoModalService,
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
    this.subscriptionManager.add(this.userDataService.updatePassword(this.oldPassword, this.newPassword).subscribe(()=>{
      this.infoModalService.openWithMessage("Hasło zostało zmienione")
    }, _ => {
      if(_.error === 'PREVIOUS PASSWORD IS NOT CORRECT'){
        this.infoModalService.openWithMessage('Stare hasło nie jest prawidłowe');
      }
    }));
  }

  onNewEmailSubmit() {
    this.subscriptionManager.add(this.userDataService.updateEmail(this.email).subscribe(()=>{
      this.infoModalService.openWithMessage("Email został zmieniony")
    }));
  }

  ngOnDestroy(): void {
    this.subscriptionManager.destroy();
  }
}
