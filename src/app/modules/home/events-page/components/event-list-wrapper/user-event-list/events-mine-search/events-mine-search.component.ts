import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-events-mine-search',
  templateUrl: './events-mine-search.component.html',
  styleUrls: ['./events-mine-search.component.scss']
})
export class EventsMineSearchComponent implements OnInit {
  //@Input() typeOfEventsToShow : EventType;
  eventsSearchTerm: string;
  @Output() searchEventsSubmit: EventEmitter<string> = new EventEmitter<string>();
  @Output() toggleInput: EventEmitter<boolean> = new EventEmitter();

  constructor(){}

  ngOnInit() {
  }

  onSubmitBtnClick(){
      this.searchEventsSubmit.emit(this.eventsSearchTerm);
      this.toggleInput.emit(false);
  }
}
