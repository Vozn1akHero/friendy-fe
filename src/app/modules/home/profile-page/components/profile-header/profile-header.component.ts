import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef} from '@angular/core';
import {Observable} from 'rxjs';
import User from '../../../../../data/schema/user';
import {ImageService} from '../../../../../shared/services/image.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {
  @Input() activeSettings: boolean;
  //@Input() userData$ : Observable<User>;

  @Input() userData : User;

  @ViewChild('userStatus') userStatus: ElementRef;
  @ViewChild('changedProfileBg') changedProfileBg: ElementRef;
  @ViewChild('changedProfileAvatar') changedProfileAvatar: ElementRef;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
  }

  changeUserAvatar(e){
    e.preventDefault();

    let value = this.changedProfileAvatar.nativeElement.value.replace('/', '\'');

    this.imageService.uploadFiles(this.changedProfileAvatar.nativeElement.value, (result) => {
      console.log(result);
      this.userData.avatar = result;
    });
  }

  openProfileInnerSettingsChild() {
    this.activeSettings = !this.activeSettings;
  }

  changeUserData() {
    console.log(this.userStatus, this.changedProfileAvatar, this.changedProfileBg);
  }

}
