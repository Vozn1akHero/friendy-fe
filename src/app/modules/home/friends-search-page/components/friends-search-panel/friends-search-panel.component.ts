import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import UserSearchModelDto from '../../models/user-search-dto.model';

@Component({
  selector: 'app-friends-search-panel',
  templateUrl: './friends-search-panel.component.html',
  styleUrls: ['./friends-search-panel.component.scss']
})
export class FriendsSearchPanelComponent implements OnInit {
  @Output() searchFormSubmitEmitter: EventEmitter<UserSearchModelDto> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchFormSubmit($event){
    this.searchFormSubmitEmitter.emit($event);
  }
}
