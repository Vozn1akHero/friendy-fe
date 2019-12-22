import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ExemplaryPhotosService} from '../../services/exemplary-photos.service';
import ExemplaryPhotoModel from '../../models/exemplary-photo.model';
import {BehaviorSubject, Subscription} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {take} from 'rxjs/operators';

@Component({
  selector: 'profile-exemplary-photos-panel',
  templateUrl: './profile-exemplary-photos-panel.component.html',
  styleUrls: ['./profile-exemplary-photos-panel.component.scss']
})
export class ProfileExemplaryPhotosPanelComponent implements OnInit, OnDestroy {
  @Input() isUserProfileOwner : boolean;
  @Input() userId : number;
  activatedRoute: string;
  userPhotos : ExemplaryPhotoModel[];
  userPhotosLoaded: boolean;
  sub: Subscription;

  constructor(private exemplaryPhotosService : ExemplaryPhotosService, private route: Router) {}

  ngOnInit() {
    this.setActivatedRoute();
    this.getPhotos();
  }

  setActivatedRoute(){
    this.activatedRoute = this.route.url;
  }

  getPhotos(){
    this.exemplaryPhotosService
      .getExemplary(this.userId)
      .pipe(take(1))
      .subscribe((value: HttpResponse<any[]>) => {
      let arr : ExemplaryPhotoModel[] = [];
      value.body.map(value => {
        arr.push(new ExemplaryPhotoModel(value.path));
      });
      this.userPhotos = arr;
      this.userPhotosLoaded = true;
    })
  }

  ngOnDestroy(): void {

  }
}
