import * as ExemplaryMessagesActions from './dialog-list.actions'
import DialogModel from '../../models/dialog.model';


export interface State {
  dialogList: DialogModel[];
  loaded: boolean;
}

const initialState: State = {
  dialogList: [],
  loaded: false
};

export function dialogListReducer(
  state: State = initialState,
  action: ExemplaryMessagesActions.Actions
) : State {
  switch (action.type) {
    case ExemplaryMessagesActions.GET_DIALOG_LIST:
      return {
        ...state,
      };
    case ExemplaryMessagesActions.SET_DIALOG_LIST:
      return {
        ...state,
        dialogList: [...action.payload],
        loaded: true
      };
    default:
      return state;
  }
}
