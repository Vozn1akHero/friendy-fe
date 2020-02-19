import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EventParticipationRequestService} from '../../services/event-participation-request.service';
import * as ParticipantRequestActions from './participation-request.actions';
import {filter, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import * as EventDataActions from '../event-data/event-data.actions';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../reducers';

@Injectable()
export class ParticipationRequestEffects {
  constructor(private actions: Actions,
              private store$: Store<AppState>,
              private participantRequestService : EventParticipationRequestService){}

  /*@Effect() get = this.actions.pipe(
    ofType(ParticipantRequestActions.GET),
    mergeMap((action: ParticipantRequestActions.Get) =>
        of(action.payload.eventId).pipe(
          withLatestFrom(
            this.store$.select(e => e.eventSettingsParticipationRequest.participantRequests[action.payload.eventId])
          )
        ),
      (action, data) => data
    ),
    filter(([action, data]) => data == null),
    switchMap((action: ParticipantRequestActions.Get) => {
      return this.participantRequestService.getById(action.payload.eventId, action.payload.page)
        .pipe(
          map(res => {
            return ({ type: EventDataActions.SET, payload: res })
          })
        )
    })
  ); */
  @Effect() get = this.actions.pipe(
    ofType(ParticipantRequestActions.GET),
    switchMap((action: ParticipantRequestActions.Get) => {
      return this.participantRequestService.getById(action.payload.eventId, action.payload.page)
        .pipe(
          map(res => {
            return ({ type: ParticipantRequestActions.SET, payload: res })
          })
        )
    })
  );

  @Effect() delete = this.actions.pipe(
    ofType(ParticipantRequestActions.DELETE),
    switchMap((action: ParticipantRequestActions.Delete) => {
      return this.participantRequestService.delete(action.payload.eventId, action.payload.issuerId)
        .pipe(
          map(res => {
            return ({ type: ParticipantRequestActions.REMOVE_FROM_STATE,
              payload: {issuerId: action.payload.issuerId} })
          })
        )
    })
  );

  @Effect() confirm = this.actions.pipe(
    ofType(ParticipantRequestActions.CONFIRM),
    switchMap((action: ParticipantRequestActions.Confirm) => {
      return this.participantRequestService.confirm(action.payload.eventId,
        action.payload.issuerId)
        .pipe(
          map(res => {
            return ({ type: ParticipantRequestActions.REMOVE_FROM_STATE,
              payload:  {issuerId: action.payload.issuerId}  })
          })
        )
    })
  );
}
