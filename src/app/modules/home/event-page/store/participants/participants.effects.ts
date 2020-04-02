import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { filter, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { EventParticipant } from "src/app/shared/models/event-participant.model";
import { EventParticipantService } from "./../../services/event-participant.service";
import { AppState } from "./../reducers";
import * as ParticipantActions from "./participants.actions";

@Injectable()
export class ParticipantEffects {
  @Effect() getExemplary = this.actions$.pipe(
    ofType<ParticipantActions.GetExemplary>(ParticipantActions.GET_EXEMPLARY),
    withLatestFrom(
      this.store$.select(e => e.eventPageParticipants.exemplaryLoaded)
    ),
    filter(([action, exemplaryLoaded]) => !exemplaryLoaded[action.payload.id]),
    mergeMap(([{ payload }]) => {
      return this.eventParticipantService.getRange(payload.id, 1, 6).pipe(
        map((value: EventParticipant[]) => {
          return new ParticipantActions.SetExemplary({
            id: payload.id,
            value
          });
        })
      );
    })
  );

  @Effect() getInitial = this.actions$.pipe(
    ofType<ParticipantActions.GetInitial>(ParticipantActions.GET_INITIAL),
    withLatestFrom(this.store$.select(e => e.eventPageParticipants.loaded)),
    filter(([action, loaded]) => !loaded[action.payload.id]),
    mergeMap(([{ payload }]) => {
      return this.eventParticipantService.getRange(payload.id, 1, 20).pipe(
        map((value: EventParticipant[]) => {
          return new ParticipantActions.SetInitial({
            id: payload.id,
            value
          });
        })
      );
    })
  );

  @Effect() startFilling = this.actions$.pipe(
    ofType<ParticipantActions.StartFilling>(ParticipantActions.START_FILLING),
    withLatestFrom(this.store$.select(e => e.eventPageParticipants.loaded)),
    filter(([action, loaded]) => !loaded[action.payload.id]),
    mergeMap(([{ payload }]) => {
      return this.eventParticipantService
        .getRange(payload.id, payload.page, 20)
        .pipe(
          map((value: EventParticipant[]) => {
            return new ParticipantActions.Fill({
              id: payload.id,
              page: payload.page,
              value
            });
          })
        );
    })
  );

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private eventParticipantService: EventParticipantService
  ) {}
}
