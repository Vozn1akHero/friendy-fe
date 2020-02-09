import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedSectionService} from './services/activated-section.service';
import {SectionType} from './enums/section-type.enum';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit, OnDestroy {
  eventCreationPopupOpened = false;
  searchActivated: boolean;
  searchActivatedSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private activatedSectionService : ActivatedSectionService) {}

  ngOnInit() {
    this.activatedSectionService.setParticipatingSection();
    this.checkSearchActivated();
  }

  checkSearchActivated(){
    this.searchActivatedSubscription = this.activatedSectionService.activatedSection$.subscribe(value => {
      this.searchActivated = value === SectionType.NonparticipatingEvents;
    });
  }

  toggleEventCreationPopup() {
    this.eventCreationPopupOpened = !this.eventCreationPopupOpened;
  }

  ngOnDestroy(): void {

  }
}
