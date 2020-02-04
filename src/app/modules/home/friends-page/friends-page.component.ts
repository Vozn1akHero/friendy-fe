import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ScrollableListNotifierService} from "../../../shared/services/scrollable-list-notifier.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss']
})
export class FriendsPageComponent implements OnInit {
  constructor(private scrollableListNotifierService : ScrollableListNotifierService) {}

  ngOnInit() {

  }

  updateFriendList() {
    this.scrollableListNotifierService.notify();
  }
}
