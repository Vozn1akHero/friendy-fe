import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import * as EventsPageAdministeredEventsActions from '../../../store/administered-events/administered-events.actions';
import * as UserEventsPageEventsActions from '../../../store/user-events/user-events.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../core/ngrx/store/app.reducer';
import {SectionType} from '../../../enums/section-type.enum';
import {ActivatedSectionService} from '../../../services/activated-section.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-event-list',
  templateUrl: './user-event-list.component.html',
  styleUrls: ['./user-event-list.component.scss']
})
export class UserEventListComponent implements OnInit, OnDestroy{
  chosenSection: SectionType;
  chosenSectionText: string = 'participating';
  searchActivatedSubscription: Subscription;

  constructor(private renderer: Renderer2,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private activatedSectionService : ActivatedSectionService,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.checkChosenSubpageEventType();
  }

  checkChosenSubpageEventType(){
    this.searchActivatedSubscription = this.activatedSectionService.activatedSection$.subscribe(value => {
      this.chosenSection = value;
      this.showConcreteTypeOfEvents();
    });
  }

  showConcreteTypeOfEvents() {
    switch (this.chosenSection) {
      case SectionType.AdministeredEvents:
        this.chosenSectionText = 'administered';
        break;
      case SectionType.ParticipatingEvents:
        this.chosenSectionText = 'participating';
        break;
    }
  }

  showConcreteTypeOfEventsFromComponent(chosenSectionText: string) {
    switch (chosenSectionText) {
      case 'administered':
        this.chosenSectionText = 'administered';
        break;
      case 'participating':
        this.chosenSectionText = 'participating';
        break;
    }
  }

  searchEvents(keyword){
    if(keyword.length === 0){
      if(this.chosenSection === SectionType.AdministeredEvents){
        this.store.dispatch(new EventsPageAdministeredEventsActions.SetDefaultEvents());
      } else if (this.chosenSection === SectionType.ParticipatingEvents){
        this.store.dispatch(new UserEventsPageEventsActions.SetDefaultEvents());
      }
    }
    if(this.chosenSection === SectionType.AdministeredEvents){
      this.store.dispatch(new EventsPageAdministeredEventsActions
        .FilterEvents({ keyword }));
    } else if (this.chosenSection === SectionType.ParticipatingEvents){
      this.store.dispatch(new UserEventsPageEventsActions
        .FilterEvents({ keyword }));
    }
  }

  ngOnDestroy(): void {
    this.searchActivatedSubscription.unsubscribe();
  }
}
