import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-participant-small-item',
  templateUrl: './participant-small-item.component.html',
  styleUrls: ['./participant-small-item.component.scss']
})
export class ParticipantSmallItemComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() surname: string;
  @Input() avatarUrl: string;
  @Output() newAdminEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddAdminBtnClick() {
    this.newAdminEmitter.emit(this.id);
  }
}
