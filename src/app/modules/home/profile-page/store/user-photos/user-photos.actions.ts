import { Action } from "@ngrx/store";
import ExemplaryPhotoModel from "../../models/exemplary-photo.model";
export const GET_PHOTOS = "[Profile Page] Get Photos";
export const SET_PHOTOS = "[Profile Page] Set Photos";

export class GetPhotosById implements Action {
  readonly type = GET_PHOTOS;

  constructor(
    public payload: {
      id: number;
    }
  ) {}
}

export class SetPhotosById implements Action {
  readonly type = SET_PHOTOS;

  constructor(
    public payload: {
      id: number;
      photos: ExemplaryPhotoModel[];
    }
  ) {}
}

export type Actions = GetPhotosById | SetPhotosById;
