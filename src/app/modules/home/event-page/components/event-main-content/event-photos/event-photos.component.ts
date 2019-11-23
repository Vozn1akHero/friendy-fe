import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-photos',
  templateUrl: './event-photos.component.html',
  styleUrls: ['./event-photos.component.scss']
})
export class EventPhotosComponent implements OnInit {
  activatedRoute: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.activatedRoute = this.router.url;
  }
}
