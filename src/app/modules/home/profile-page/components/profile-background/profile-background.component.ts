import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as ProfileBackgroundActions from '../../store/profile-background/profile-background.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../core/ngrx/store/app.reducer';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProfileBackgroundService} from '../../services/profile-background.service';

@Component({
  selector: 'app-profile-background',
  templateUrl: './profile-background.component.html',
  styleUrls: ['./profile-background.component.scss']
})
export class ProfileBackgroundComponent implements OnInit, OnDestroy {
  @Input() userId: number;
  @Input() activeSettings: boolean;
  @Input() isUserProfileOwner : boolean;

  profileBgUrl: string;

  profileBgSubscription: Subscription;
  profileBgUpdateSubscription: Subscription;

  constructor(private profileBackgroundService: ProfileBackgroundService) { }

  ngOnInit() {
    this.getProfileBackground();
  }

  getProfileBackground() {
    this.profileBgSubscription = this.profileBackgroundService.getByUserId(this.userId)
      .subscribe(res => {
        this.profileBgUrl = "http://localhost:5000/" + res});
  }

  setNewProfileBackground(e){
    if(e.srcElement.files && e.srcElement.files[0]) {
      this.profileBgUpdateSubscription = this.profileBackgroundService.update(e.srcElement.files[0])
        .subscribe(res => {
          this.profileBgUrl = "http://localhost:5000/" + res;
        });
    }
  }

  ngOnDestroy(): void {
    this.profileBgSubscription.unsubscribe();
    if(this.profileBgUpdateSubscription != null){
      this.profileBgUpdateSubscription.unsubscribe();
    }
  }
}
