import * as ContactsActions from './contacts.actions';
import {FriendModel} from '../../models/friend.model';

export interface State {
  contacts: FriendModel[],
  loaded: boolean;
}

const initialState: State = {
  contacts: [],
  loaded: false
};

export function contactsReducer(
  state: State = initialState,
  action: ContactsActions.Actions
) : State {
  switch (action.type) {
    case ContactsActions.GET_CONTACTS:
      return {
        ...state
      };
    case ContactsActions.SET_CONTACTS:
      return {
        contacts: [...state.contacts, ...action.payload],
        loaded: true
      };
    default:
      return state;
  }
}
