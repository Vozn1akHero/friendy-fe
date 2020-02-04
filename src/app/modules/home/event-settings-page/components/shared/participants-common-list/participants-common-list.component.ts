import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-participants-common-list',
  templateUrl: './participants-common-list.component.html',
  styleUrls: ['./participants-common-list.component.scss']
})
export class ParticipantsCommonListComponent implements OnInit {
  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearch(value: string):void{
    this.searchEmitter.emit(value)
  }
}
