import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-participants-search',
  templateUrl: './participants-search.component.html',
  styleUrls: ['./participants-search.component.scss']
})
export class ParticipantsSearchComponent implements OnInit {
  @Output() emitInputValue : EventEmitter<string> = new EventEmitter();
  inputValue: string = "";

  constructor() { }

  ngOnInit() {
  }

  searchParticipants() {
    this.emitInputValue.emit(this.inputValue);
  }
}
