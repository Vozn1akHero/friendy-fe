import {Component, Input, OnInit} from '@angular/core';
import {EventParticipantService} from '../../../../../services/event-participant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-participant-controls',
  templateUrl: './participant-controls.component.html',
  styleUrls: ['./participant-controls.component.scss']
})
export class ParticipantControlsComponent implements OnInit {
  @Input() userId: number;
  @Input() eventId: number;

  constructor(private router: Router,
              private eventParticipantService : EventParticipantService) { }

  ngOnInit() {}

  onLeaveBtnClick() {
    this.eventParticipantService.onLeave(this.eventId,
      this.userId).subscribe(() => {
      this.router.navigate(['app/events']);
    })
  }
}
