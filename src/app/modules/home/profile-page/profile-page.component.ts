import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfilePageModalsService} from './services/profile-page-modals.service';
import {UserIdService} from "../../../shared/services/user-id.service";
import {Store} from "@ngrx/store";
import * as fromApp from "../../../core/ngrx/store/app.reducer";
import * as UserPostsActions from "./store/user-posts/user-posts.actions";
import {Title} from '@angular/platform-browser';
import {ScrollableListNotifierService} from '../../../shared/services/scrollable-list-notifier.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  providers: [ScrollableListNotifierService]
})
export class ProfilePageComponent implements OnInit {
  activeSettings : boolean = false;
  isUserProfileOwner: boolean;
  userId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userIdService: UserIdService,
              private store: Store<fromApp.AppState>,
              private titleService: Title,
              private scrollableListNotifierService : ScrollableListNotifierService,
              private profilePageModalsService: ProfilePageModalsService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  checkRoute(){
    if(!this.route.snapshot.paramMap.get('id')){
      this.router.navigate(['app/profile', this.userIdService.userIdValue])
    }
  }

  ngOnInit() {
    this.checkRoute();
    this.setUserId();
    this.setIsUserProfileOwner();
  }

  setUserId(){
    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('id');
    });
  }

  setIsUserProfileOwner(){
    this.isUserProfileOwner = this.route.snapshot.data.profileBelongingStatus;
  }

  newAvatarSubmitted(){
    this.profilePageModalsService.newAvatarModalOpened = false;
  }

  updateList() {
    this.scrollableListNotifierService.notify();
  }
}
