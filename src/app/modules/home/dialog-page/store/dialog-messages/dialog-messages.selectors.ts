import {createFeatureSelector, createSelector} from '@ngrx/store';
import { State } from './dialog-messages.reducer';
import MessageInChatModel from '../../models/message-in-chat.model';

export const messagesInDialog = (state: State) => state.messagesInDialog;

export const orderedMessagesInDialog = createSelector(messagesInDialog, (messagesInDialog : MessageInChatModel[]) => {
  let friendMessagesSubgroup = [];
  let userMessagesSubgroup = [];

  let orderedMessages = [];

  messagesInDialog.map((message, index) => {
    if(message.isUserAuthor) {
      if (index > 0 &&
        messagesInDialog[index - 1].isUserAuthor) {
        userMessagesSubgroup.push(message);
      } else if (index > 0 && !messagesInDialog[index - 1].isUserAuthor){
        //friendMessagesGroup.push(friendMessagesSubgroup);
        orderedMessages.push({
          messages: friendMessagesSubgroup,
          isAuthor: false
        });
        friendMessagesSubgroup = [];

        userMessagesSubgroup.push(message);
      } else if(index === 0){
        userMessagesSubgroup.push(message);
      }
    } else {
      if (index > 0 &&
        !messagesInDialog[index - 1].isUserAuthor) {
        friendMessagesSubgroup.push(message);
      } else if (index > 0 && messagesInDialog[index - 1].isUserAuthor){
        //userMessagesGroup.push(userMessagesSubgroup);
        orderedMessages.push({
          messages: userMessagesSubgroup,
          isAuthor: true
        });
        userMessagesSubgroup = [];

        friendMessagesSubgroup.push(message);
      } else if(index === 0){
        friendMessagesSubgroup.push(message);
      }
    }

    if(messagesInDialog.length - index === 1){
      if(message.isUserAuthor){
        //userMessagesGroup.push(userMessagesSubgroup);
        orderedMessages.push({
          messages: userMessagesSubgroup,
          isAuthor: true
        });
      } else {
        //friendMessagesGroup.push(friendMessagesSubgroup);
        orderedMessages.push({
          messages: friendMessagesSubgroup,
          isAuthor: false
        });
      }
    }
  });

  return orderedMessages;
});
