import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-settings-nav',
  templateUrl: './user-settings-nav.component.html',
  styleUrls: ['./user-settings-nav.component.scss']
})
export class UserSettingsNavComponent implements OnInit {
  activatedRoute: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.activatedRoute = window.location.pathname;
  }

  navigateToBasicSettings(){
    this.router.navigate([this.activatedRoute], {queryParams: { 'sp': 'basic' }});
  }

  navigateToInterestsSettings(){
    this.router.navigate([this.activatedRoute], {queryParams: { 'sp': 'interests' }});
  }

  navigateToSafetySettings(){
    this.router.navigate([this.activatedRoute], {queryParams: { 'sp': 'safety' }});
  }

  navigateToEducationSettings() {
    this.router.navigate([this.activatedRoute], {queryParams: { 'sp': 'education' }});
  }

  navigateToOtherSettings() {
    this.router.navigate([this.activatedRoute], {queryParams: { 'sp': 'other' }});
  }
}
