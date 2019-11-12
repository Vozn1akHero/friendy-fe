import {Component, OnInit} from '@angular/core';
import {ProfilePageService} from './services/profile-page.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {ProfilePageModalsService} from './services/profile-page-modals.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  activeSettings : boolean = false;
  showComments : boolean = true;
  isUserProfileOwner: boolean;
  userId: number;

  constructor(private route: ActivatedRoute,
              private profilePageModalsService: ProfilePageModalsService,
              private pageService: ProfilePageService) {
    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('id');
    });
    this.isUserProfileOwner = this.route.snapshot.data.profileBelongingStatus;
  }

  newAvatarSubmitted(){
    this.profilePageModalsService.newAvatarModalOpened = false;
  }

  ngOnInit() {
    this.pageService.connectToSocket();
  }
}
