import {Action} from '@ngrx/store';
import FoundUserModel from '../../models/found-user.model';
import UserSearchCriteriaModel from '../../models/user-search-criteria.model';

export const GET_INITIAL_LIST = '[User List] Get Initial List';
export const SET_INITIAL_LIST = '[User List] Set Initial List';
export const FIND_BY_CRITERIA = '[User List] Find By Criteria';

export class GetInitialList implements Action{
  readonly type = GET_INITIAL_LIST;
  constructor(public payload: {page: number}){}
}
export class SetInitialList implements Action{
  readonly type = SET_INITIAL_LIST;
  constructor(public payload: FoundUserModel[]){}
}
export class FindByCriteria implements Action{
  readonly type = FIND_BY_CRITERIA;
  constructor(public payload: {criteria: UserSearchCriteriaModel, page: number}){}
}

export type Actions = GetInitialList | SetInitialList | FindByCriteria;
