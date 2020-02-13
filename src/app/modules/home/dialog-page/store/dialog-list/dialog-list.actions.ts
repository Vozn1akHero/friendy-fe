import { Action } from '@ngrx/store';
import DialogModel from '../../models/dialog.model';

export const GET_DIALOG_LIST = '[Messages Page] Get Dialog List';
export const SET_DIALOG_LIST = '[Messages Page] Set Dialog List';
export const ADD_NEW_OR_UPDATE_DIALOG = '[Messages Page] Add New Or Update Dialog';

export class GetDialogList implements Action {
  readonly type = GET_DIALOG_LIST;

  constructor(public payload: { page: number }){}
}

export class SetDialogList implements Action {
  readonly type = SET_DIALOG_LIST;

  constructor(public payload: DialogModel[]){}
}

export class AddNewOrUpdateDialogModel implements Action{
  readonly type = ADD_NEW_OR_UPDATE_DIALOG;

  constructor(public payload: DialogModel){
  }
}

export type Actions = GetDialogList | SetDialogList | AddNewOrUpdateDialogModel
