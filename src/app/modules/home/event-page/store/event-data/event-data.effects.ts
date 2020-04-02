import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { filter, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { EventDataService } from "../../services/event-data.service";
import { AppState } from "../reducers";
import * as EventDataActions from "./event-data.actions";

@Injectable()
export class EventDataEffects {
  @Effect()
  getEventData = this.actions$.pipe(
    ofType<EventDataActions.GetEventData>(EventDataActions.GET_EVENT_DATA),
    withLatestFrom(this.store$.select(e => e.eventPageEventData.loaded)),
    filter(([action, loaded]) => !loaded[action.payload.id]),
    mergeMap(([{ payload }]) => {
      return this.eventDataService.getEventData(payload.id).pipe(
        map(value => {
          return {
            type: EventDataActions.SET_EVENT_DATA,
            payload: {
              id: payload.id,
              value
            }
          };
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private eventDataService: EventDataService
  ) {}
}
