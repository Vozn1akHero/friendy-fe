import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../../app-routing.module';
import {EventsItemComponent} from './components/events-item/events-item.component';
import {EventsPageComponent} from './events-page.component';
import {SuggestedEventsItemComponent} from './components/suggested-events-item/suggested-events-item.component';
import {SearchEventsComponent} from './components/search-events/search-events.component';
import {EventsMineSearchComponent} from './components/events-mine-search/events-mine-search.component';
import {EventCreationComponent} from './components/event-creation/event-creation.component';
import {EventsListControlsComponent} from './components/events-list-controls/events-list-controls.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    EventsItemComponent,
    EventsPageComponent,
    SearchEventsComponent,
    EventsListControlsComponent,
    EventsMineSearchComponent,
    SearchEventsComponent,
    EventCreationComponent,
    SuggestedEventsItemComponent
  ],
  exports: []
})
export class EventsPageModule { }
