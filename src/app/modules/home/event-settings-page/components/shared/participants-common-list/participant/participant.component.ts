import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() surname: string;
  @Input() avatarUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
