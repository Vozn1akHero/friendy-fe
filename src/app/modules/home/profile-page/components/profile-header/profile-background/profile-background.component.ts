import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {Observable, Subscription} from 'rxjs';

import {ProfileBackgroundService} from '../../../services/profile-background.service';

@Component({
  selector: 'app-profile-background',
  templateUrl: './profile-background.component.html',
  styleUrls: ['./profile-background.component.scss']
})
export class ProfileBackgroundComponent implements OnInit, OnDestroy {
  @Input() userId: number;
  @Input() activeSettings: boolean;
  @Input() isUserProfileOwner : boolean;
  @Input() backgroundUrl : string;

  profileBgUpdateSubscription: Subscription;

  constructor(private profileBackgroundService: ProfileBackgroundService) { }

  ngOnInit() {

  }

  setNewProfileBackground(e){
    if(e.srcElement.files && e.srcElement.files[0]) {
      this.profileBackgroundService.update(e.srcElement.files[0])
        .subscribe(res => {
          this.backgroundUrl = "http://localhost:5000/" + res;
        });
    }
  }

  ngOnDestroy(): void {
    /*if(this.profileBgUpdateSubscription != null){
      this.profileBgUpdateSubscription.unsubscribe();
    }*/
  }
}
