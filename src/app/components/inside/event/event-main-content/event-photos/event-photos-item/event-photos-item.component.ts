import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-photos-item',
  templateUrl: './event-photos-item.component.html',
  styleUrls: ['./event-photos-item.component.scss']
})
export class EventPhotosItemComponent implements OnInit {
  @Input() photoContent = {
    href: String, src : String
  };

  constructor() { }

  ngOnInit() {
  }

}
