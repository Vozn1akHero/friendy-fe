import { ExemplaryPhotosService } from "./../../services/exemplary-photos.service";
import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { map, mergeMap, filter, withLatestFrom } from "rxjs/operators";
import * as UserPhotoActions from "./user-photos.actions";
import { AppState } from "../reducers";
import { Store } from "@ngrx/store";
import { HttpResponse } from "@angular/common/http";
import ExemplaryPhotoModel from "../../models/exemplary-photo.model";

@Injectable()
export class UserPhotoEffects {
  @Effect() getPhotos = this.actions$.pipe(
    ofType<UserPhotoActions.GetPhotosById>(UserPhotoActions.GET_PHOTOS),
    withLatestFrom(
      this.store$.select(e => e.profilePageUserExemplaryFriends.loaded)
    ),
    filter(([action, loaded]) => !loaded[action.payload.id]),
    mergeMap(([{ payload }]) => {
      return this.exemplaryPhotosService.getExemplary(payload.id).pipe(
        map((res: HttpResponse<any[]>) => {
          return new UserPhotoActions.SetPhotosById({
            id: payload.id,
            photos: [
              ...res.body.map(value => new ExemplaryPhotoModel(value.path))
            ]
          });
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private exemplaryPhotosService: ExemplaryPhotosService
  ) {}
}
