import {createSlice} from '@reduxjs/toolkit';
import {ConversationItemType} from './conversationTypes';

// Define a type for the slice state
interface ConversationState {
  conversations: ConversationItemType[];
}

// Define the initial state using that type
const initialState: ConversationState = {
  conversations: [
    {
      id: '1',
      newMessagesCount: 1,
      fromUsername: 'user1',
      latestMessageContent:
        'test messagetest messagetest messagetest messagetest messagetest messagetest message',
      receivedTime: '20230106',
    },
    {
      id: '2',
      newMessagesCount: 1,
      fromUsername: 'user1',
      latestMessageContent:
        'test messagetest messagetest messagetest messagetest messagetest messagetest message',
      receivedTime: '20230206',
    },
    {
      id: '3',
      newMessagesCount: 1,
      fromUsername: 'user1',
      latestMessageContent:
        'test messagetest messagetest messagetest messagetest messagetest messagetest message',
      receivedTime: '20230406',
    },
  ],
};

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {},
});

// export const { } = conversationSlice.actions;

export default conversationSlice.reducer;
