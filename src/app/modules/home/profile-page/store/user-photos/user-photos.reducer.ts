import ExemplaryPhotoModel from "../../models/exemplary-photo.model";
import * as UserPhotoActions from "./user-photos.actions";

export interface State {
  exemplaryPhotos: { [id: number]: ExemplaryPhotoModel[] };
  loaded: { [id: number]: boolean };
}

const initialState: State = {
  loaded: {},
  exemplaryPhotos: {}
};

export function userPhotosReducer(
  state: State = initialState,
  action: UserPhotoActions.Actions
) {
  switch (action.type) {
    case UserPhotoActions.GET_PHOTOS:
      return {
        ...state
      };
    case UserPhotoActions.SET_PHOTOS:
      return {
        ...state,
        loaded: {
          ...state.loaded,
          [action.payload.id]: true
        },
        exemplaryPhotos: {
          ...state.exemplaryPhotos,
          [action.payload.id]: action.payload.photos
        }
      };
    default:
      return state;
  }
}
