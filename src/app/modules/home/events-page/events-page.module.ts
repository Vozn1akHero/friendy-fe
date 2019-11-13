import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../../app-routing.module';
import {UserEventItemComponent} from './components/user-event-list/user-event-item/user-event-item.component';
import {EventsPageComponent} from './events-page.component';
import {SuggestedEventsItemComponent} from './components/suggested-events-item/suggested-events-item.component';
import {SearchEventsComponent} from './components/search-events/search-events.component';
import {EventsMineSearchComponent} from './components/events-mine-search/events-mine-search.component';
import {EventCreationComponent} from './components/event-creation/event-creation.component';
import {EventsListControlsComponent} from './components/events-list-controls/events-list-controls.component';
import { UserAdministeredEventItemComponent } from './components/user-administered-event-list/user-administered-event-item/user-administered-event-item.component';
import { UserEventListComponent } from './components/user-event-list/user-event-list.component';
import { UserAdministeredEventListComponent } from './components/user-administered-event-list/user-administered-event-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    UserEventItemComponent,
    EventsPageComponent,
    SearchEventsComponent,
    EventsListControlsComponent,
    EventsMineSearchComponent,
    SearchEventsComponent,
    EventCreationComponent,
    SuggestedEventsItemComponent,
    UserAdministeredEventItemComponent,
    UserEventListComponent,
    UserAdministeredEventListComponent
  ],
  exports: []
})
export class EventsPageModule { }
