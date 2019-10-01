import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import User from '../../models/user.model';
import UserAvatar from '../../models/user-avatar.model';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {
  @Input() activeSettings: boolean;
  //@Input() userData$ : Observable<User>;
  @Input() userData : User;
  @Input() userAvatar : UserAvatar;

  @ViewChild('userStatus') userStatus: ElementRef;
  @ViewChild('changedProfileBg') changedProfileBg: ElementRef;
  @ViewChild('changedProfileAvatar') changedProfileAvatar: ElementRef;

  constructor() {}

  ngOnInit() {

  }

/*  changeUserAvatar(e){
    e.preventDefault();

    let value = this.changedProfileAvatar.nativeElement.value.replace('/', '\'');

    this.imageService.uploadFiles(this.changedProfileAvatar.nativeElement.value, (result) => {
      console.log(result);
    });
  }*/
  changeUserAvatar(e){
    e.preventDefault();

  }


  openProfileInnerSettingsChild() {
    this.activeSettings = !this.activeSettings;
  }

  changeUserData() {
    console.log(this.userStatus, this.changedProfileAvatar, this.changedProfileBg);
  }
}
