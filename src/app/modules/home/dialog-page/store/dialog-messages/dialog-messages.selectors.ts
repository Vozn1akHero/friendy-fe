import {createFeatureSelector, createSelector} from '@ngrx/store';
import { State } from './dialog-messages.reducer';

export const messagesInDialog = (state: State) => state.messagesInDialog;
