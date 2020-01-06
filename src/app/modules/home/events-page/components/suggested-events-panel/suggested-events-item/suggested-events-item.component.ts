import {Component, Input, OnInit} from '@angular/core';
import Event from '../../../models/event.model';

@Component({
  selector: 'app-suggested-events-item',
  templateUrl: './suggested-events-item.component.html',
  styleUrls: ['./suggested-events-item.component.scss']
})
export class SuggestedEventsItemComponent {
  @Input() eventData: Event;
}
