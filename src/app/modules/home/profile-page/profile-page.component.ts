import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfilePageModalsService} from './services/profile-page-modals.service';
import {VisitedProfileForRsService} from './services/visited-profile-for-rs.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styles: [`.profile-page {
    display: flex;
    position: relative;
    flex-direction: column;
  }`]
})
export class ProfilePageComponent implements OnInit {
  activeSettings : boolean = false;
  isUserProfileOwner: boolean;
  userId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private profilePageModalsService: ProfilePageModalsService,
              private visitedProfileForRsService : VisitedProfileForRsService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.setUserId();
    this.setIsUserProfileOwner();
    this.createVisitation();
  }


  setUserId(){
    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('id');
    });
  }

  setIsUserProfileOwner(){
    this.isUserProfileOwner = this.route.snapshot.data.profileBelongingStatus;
  }

  createVisitation(){
    if(!this.isUserProfileOwner){
      this.visitedProfileForRsService
        .create(this.userId)
        .pipe(take(1)).subscribe();
    }
  }

  newAvatarSubmitted(){
    this.profilePageModalsService.newAvatarModalOpened = false;
  }
}
