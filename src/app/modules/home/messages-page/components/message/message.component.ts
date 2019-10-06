import {Component, Input, OnInit} from '@angular/core';
import ExemplaryMessage from '../../models/exemplary-message.model';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() exemplaryMessage: ExemplaryMessage;

  constructor() { }

  ngOnInit() {
  }


}
