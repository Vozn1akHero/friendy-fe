import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-avatar',
  templateUrl: './event-avatar.component.html',
  styleUrls: ['./event-avatar.component.scss']
})
export class EventAvatarComponent implements OnInit {
  @Input() activeSettings;

  constructor() { }

  ngOnInit() {
  }

}
