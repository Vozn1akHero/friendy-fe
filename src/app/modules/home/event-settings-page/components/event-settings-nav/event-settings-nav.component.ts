import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-event-settings-nav',
  templateUrl: './event-settings-nav.component.html',
  styleUrls: ['./event-settings-nav.component.scss']
})
export class EventSettingsNavComponent implements OnInit {
  activatedRoute: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.activatedRoute = window.location.pathname;
  }

  navigateToBasicSettings(){
    this.router.navigate([this.activatedRoute], {queryParams: { 'sp': 'basic' }});
  }

  navigateToParticipantsSettings(){
    this.router.navigate([this.activatedRoute], {queryParams: { 'sp': 'participants' }});
  }

  navigateToAdminsSettings(){
    this.router.navigate([this.activatedRoute], {queryParams: { 'sp': 'admins' }});
  }
}
