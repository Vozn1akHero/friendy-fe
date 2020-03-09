import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-event-settings-nav',
  templateUrl: './event-settings-nav.component.html',
  styleUrls: ['./event-settings-nav.component.scss']
})
export class EventSettingsNavComponent implements OnInit {
  activatedRoute: string;
  private isEventCreator: boolean;
  lineMarginTop: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute = window.location.pathname;
    this.setIsEventCreator();
    this.setLineTopMargin();
  }

  setIsEventCreator(){
      this.isEventCreator = this.route.snapshot.data.isEventCreator;
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

  navigateToRequests(){
    this.router.navigate([this.activatedRoute], {queryParams: { 'sp': 'requests' }});
  }

  navigateToBannedParticipantsSettings() {
    this.router.navigate([this.activatedRoute], {queryParams: { 'sp': 'banned-participants' }});
  }

  private setLineTopMargin() {
    this.route.queryParams.subscribe(queryParams => {
      const chosenSubpage = queryParams["sp"];
      if(chosenSubpage === 'basic'){
        this.lineMarginTop = 0;
      } else if(chosenSubpage === 'participants'){
        this.lineMarginTop = 4.4;
      } else if(chosenSubpage === 'requests'){
        this.lineMarginTop = 8.4;
      } else if(chosenSubpage === 'banned-participants'){
        this.lineMarginTop = 12.5;
      } else if(chosenSubpage === 'admins'){
        this.lineMarginTop = 16.6;
      }
    })
  }

}
