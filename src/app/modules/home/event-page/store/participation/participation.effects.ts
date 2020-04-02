import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { PARTICIPATION_STATUS } from "../../models/participation-status.enum";
import { UserParticipationStatusService } from "../../services/user-participation-status.service";
import * as ParticipationActions from "./participation.actions";

@Injectable()
export class ParticipationEffects {
  @Effect() get = this.actions$.pipe(
    ofType(ParticipationActions.GET),
    switchMap((action: ParticipationActions.Get) => {
      return this.eventParticipationStatusService
        .getUserParticipationStatus(action.payload.eventId)
        .pipe(
          map((res: any) => {
            return new ParticipationActions.Set(res.eventParticipationStatus);
          })
        );
    })
  );
  @Effect() sendRequest = this.actions$.pipe(
    ofType(ParticipationActions.SEND_REQUEST),
    switchMap((action: ParticipationActions.SendRequest) => {
      return this.eventParticipationStatusService
        .send(action.payload.eventId)
        .pipe(
          map((res: any) => {
            if (res.creationResult == 0) {
              return new ParticipationActions.Set(
                PARTICIPATION_STATUS.RequestSent
              );
            } else if (res.creationResult == 1) {
              return new ParticipationActions.Set(
                PARTICIPATION_STATUS.Participant
              );
            }
          })
        );
    })
  );

  @Effect()
  removeRequest = this.actions$.pipe(
    ofType(ParticipationActions.REMOVE_REQUEST),
    switchMap((action: ParticipationActions.RemoveRequest) => {
      return this.eventParticipationStatusService.delete(
        action.payload.eventId
      ); /*.pipe(map((res:any)=>{
          return new ParticipationActions.Set(res.eventParticipationStatus);
        }))*/
    })
  );
  @Effect()
  leaveEvent = this.actions$.pipe(
    ofType(ParticipationActions.LEAVE),
    switchMap((action: ParticipationActions.Leave) => {
      return this.eventParticipationStatusService.leave(
        action.payload.eventId
      ); /*.pipe(map((res:any)=>{
          return new ParticipationActions.Set(res.eventParticipationStatus);
        }))*/
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private eventParticipationStatusService: UserParticipationStatusService
  ) {}
}
