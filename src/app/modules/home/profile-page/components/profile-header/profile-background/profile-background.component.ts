import {Component, Input, OnInit} from '@angular/core';
import {ProfileBackgroundService} from '../../../services/profile-background.service';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-profile-background',
  templateUrl: './profile-background.component.html',
  styleUrls: ['./profile-background.component.scss']
})
export class ProfileBackgroundComponent implements OnInit {
  @Input() userId: number;
  @Input() activeSettings: boolean;
  @Input() isUserProfileOwner : boolean;
  //@Input() backgroundUrl : Subject<string>;
  @Input() backgroundUrl : string;
  @Input() userDataLoaded$: Observable<boolean>;

  constructor(private profileBackgroundService: ProfileBackgroundService) { }

  ngOnInit() {

  }

  setNewProfileBackground(e){
    if(e.srcElement.files && e.srcElement.files[0]) {
      this.profileBackgroundService.update(e.srcElement.files[0])
        .subscribe(res => {
          //this.backgroundUrl.next("http://localhost:5000/" + res);
        });
    }
  }
}
