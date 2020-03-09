import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {concat, Observable, Subscription} from 'rxjs';
import EventParticipantDetailed from '../../../models/event-participant-detailed.model';
import {EventParticipantService} from '../../../services/event-participant.service';
import {concatMap, filter, flatMap, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-participants-modal',
  templateUrl: './participants-modal.component.html',
  styleUrls: ['./participants-modal.component.scss']
})
export class ParticipantsModalComponent implements OnInit {
  eventParticipantsSub: Subscription;
  eventParticipants: EventParticipantDetailed[];
  //filteredParticipants: Observable<EventParticipantDetailed[]>;
  eventParticipantsLoaded$: Observable<boolean>;
  @Input() eventId: number;
  @Output() hideModal: EventEmitter<void> = new EventEmitter();
  @Output() addNewAdminEmitter : EventEmitter<EventParticipantDetailed> = new EventEmitter();

  constructor(private eventParticipantService: EventParticipantService) { }

  ngOnInit() {
    this.getEventParticipants();
  }

  addNewAdmin(id: number){
    this.addNewAdminEmitter.emit(this.eventParticipants.find(e=>e.id===id));
  }

  getEventParticipants(){
    this.eventParticipantService.getRange(this.eventId, 1, 10);
    this.eventParticipantsSub = this.eventParticipantService.eventParticipants$
      .pipe(map(arr => {
        console.log(arr);
        return [...arr.filter(value => !value.isAdmin)]
      }))
      .subscribe((value) => {
        console.log(value);
        this.eventParticipants = value;
      });
    this.eventParticipantsLoaded$ = this.eventParticipantService.eventParticipantsLoaded$;
  }

  closePopup() {
    this.hideModal.emit();
  }
}
