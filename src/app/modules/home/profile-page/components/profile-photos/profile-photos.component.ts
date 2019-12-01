import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile-photos',
  templateUrl: './profile-photos.component.html',
  styleUrls: ['./profile-photos.component.scss']
})
export class ProfilePhotosComponent implements OnInit {
  @Input() isUserProfileOwner : boolean;
  @Input() userId : number;
  activatedRoute: string;

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.activatedRoute = this.router.url;
  }

  ngOnInit() {
  }
}
