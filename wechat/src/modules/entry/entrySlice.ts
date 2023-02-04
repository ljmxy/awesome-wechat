import {createSlice} from '@reduxjs/toolkit';

// Define a type for the slice state
interface EntryState {
  currentLanguage: string;
}

// Define the initial state using that type
const initialState: EntryState = {
  currentLanguage: 'en-US',
};

export const entrySlice = createSlice({
  name: 'entry',
  initialState,
  reducers: {},
});

// export const { } = entrySlice.actions;

export default entrySlice.reducer;
