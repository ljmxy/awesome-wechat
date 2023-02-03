import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';

// Define a type for the slice state
interface ConversationState {

}

// Define the initial state using that type
const initialState: ConversationState = {

};

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
  },
});

// export const { } = conversationSlice.actions;

export default conversationSlice.reducer;
