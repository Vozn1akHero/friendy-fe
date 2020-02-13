import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserPhotoService} from './services/user-photo.service';
import {EventPhotoService} from './services/event-photo.service';
import {BaseDataService} from './services/base-data.service';
import {ScrollableListNotifierService} from '../../../shared/services/scrollable-list-notifier.service';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss'],
  providers: [UserPhotoService, EventPhotoService, BaseDataService, ScrollableListNotifierService]
})
export class PhotosPageComponent implements OnInit {
  chosenSubpage: string;
  id: number;

  constructor(private route: ActivatedRoute,
              private scrollableListNotifierService: ScrollableListNotifierService,
              private router: Router) {
    this.getChosenSubpage();
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  updateList() {
    this.scrollableListNotifierService.notify();
  }

  getChosenSubpage() {
    if (this.router.url.includes('profile')) {
      this.chosenSubpage = 'profile-page';
    } else {
      this.chosenSubpage = 'event-page';
    }
  }
}
