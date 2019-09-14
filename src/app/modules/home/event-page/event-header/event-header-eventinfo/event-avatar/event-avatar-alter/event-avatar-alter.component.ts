import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-avatar-alter',
  templateUrl: './event-avatar-alter.component.html',
  styleUrls: ['./event-avatar-alter.component.scss']
})
export class EventAvatarAlterComponent implements OnInit {
  @Input() activeSettings;

  constructor() { }

  ngOnInit() {
  }

}
