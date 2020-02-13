import { Action } from '@ngrx/store';
import InterlocutorDataModel from '../../models/interlocutor-data.model';


export const GET_INTERLOCUTOR = '[Dialog Page] Get Interlocutor';
export const SET_INTERLOCUTOR = '[Dialog Page] Set Interlocutor';

export class GetInterlocutor implements Action {
  readonly type = GET_INTERLOCUTOR;

  constructor(public payload: { interlocutorId: number }){}
}

export class SetInterlocutor implements Action {
  readonly type = SET_INTERLOCUTOR;

  constructor(public payload: InterlocutorDataModel){}
}

export type Actions = GetInterlocutor | SetInterlocutor;
