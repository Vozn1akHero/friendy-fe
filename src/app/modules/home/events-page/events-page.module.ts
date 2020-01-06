import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../../app-routing.module';
import {EventsPageComponent} from './events-page.component';
import {SuggestedEventsItemComponent} from './components/suggested-events-panel/suggested-events-item/suggested-events-item.component';
import {SearchEventsComponent} from './components/search-events/search-events.component';
import {EventsMineSearchComponent} from './components/event-list-wrapper/user-event-list/events-mine-search/events-mine-search.component';
import {EventCreationComponent} from './components/event-creation/event-creation.component';
import {EventsListControlsComponent} from './components/events-list-controls/events-list-controls.component';
import { UserEventListComponent } from './components/event-list-wrapper/user-event-list/user-event-list.component';
import { UserAdministeredEventListComponent } from './components/event-list-wrapper/user-event-list/user-administered-event-list/user-administered-event-list.component';
import { SearchEventListComponent } from './components/event-list-wrapper/search-event-list/search-event-list.component';
import {UserEventItemComponent} from './components/event-list-wrapper/user-event-list/user-event-item/user-event-item.component';
import {UserParticipatingEventListComponent} from './components/event-list-wrapper/user-event-list/user-participating-event-list/user-participating-event-list.component';
import { EventsSearchPanelComponent } from './components/events-search-panel/events-search-panel.component';
import { SuggestedEventsPanelComponent } from './components/suggested-events-panel/suggested-events-panel.component';
import { EventListWrapperComponent } from './components/event-list-wrapper/event-list-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    UserParticipatingEventListComponent,
    UserEventItemComponent,
    EventsPageComponent,
    SearchEventsComponent,
    EventsListControlsComponent,
    EventsMineSearchComponent,
    SearchEventsComponent,
    EventCreationComponent,
    SuggestedEventsItemComponent,
    UserEventListComponent,
    UserAdministeredEventListComponent,
    SearchEventListComponent,
    EventsSearchPanelComponent,
    SuggestedEventsPanelComponent,
    EventListWrapperComponent
  ],
  exports: []
})
export class EventsPageModule { }
