import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import {
  filter,
  map,
  mergeMap,
  switchMap,
  withLatestFrom
} from "rxjs/operators";
import { EventDataService } from "../../services/event-data.service";
import { AppState } from "../reducers";
import * as EventDataActions from "./event-data.actions";

@Injectable()
export class EventDataEffects {
  @Effect()
  getEvents = this.actions$.pipe(
    ofType(EventDataActions.GET),
    map((action: EventDataActions.GetEventData) => action.payload.eventId),
    mergeMap(
      id =>
        of(id).pipe(
          withLatestFrom(
            this.store$.select(
              e => e.eventSettingsPageBasicData.eventBasicData[id]
            )
          )
        ),
      (id, data) => data
    ),
    filter(([id, data]) => data == null),
    switchMap(([id, data]) => {
      return this.eventDataService.getById(id).pipe(
        map(res => {
          return { type: EventDataActions.SET, payload: res };
        })
      );
    })
  );

  @Effect() updateAvatar = this.actions$.pipe(
    ofType(EventDataActions.UPDATE_AVATAR),
    switchMap((action: EventDataActions.UpdateAvatar) => {
      return this.eventDataService
        .changeAvatarById(action.payload.eventId, action.payload.image)
        .pipe(
          map((res: any) => {
            return {
              type: EventDataActions.SET_UPDATED_AVATAR,
              payload: {
                eventId: action.payload.eventId,
                src: `${EnviromentVariables.fileHostBaseUrl}${res.body.avatar}`
              }
            };
          })
        );
    })
  );

  @Effect() updateBackground = this.actions$.pipe(
    ofType(EventDataActions.UPDATE_BACKGROUND),
    switchMap((action: EventDataActions.UpdateBackground) => {
      return this.eventDataService
        .changeBackgroundById(action.payload.eventId, action.payload.image)
        .pipe(
          map((res: any) => {
            return {
              type: EventDataActions.SET_UPDATED_BACKGROUND,
              payload: {
                eventId: action.payload.eventId,
                src: `${EnviromentVariables.fileHostBaseUrl}${res.body.background}`
              }
            };
          })
        );
    })
  );

  @Effect() updateData = this.actions$.pipe(
    ofType(EventDataActions.UPDATE_DATA),
    switchMap((action: EventDataActions.UpdateData) => {
      return this.eventDataService.update(action.payload).pipe(
        map((res: any) => {
          return {
            type: EventDataActions.SET_UPDATED_DATA,
            payload: { eventId: action.payload.id, src: res }
          };
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private eventDataService: EventDataService,
    private router: Router,
    private store$: Store<AppState>
  ) {}
}
