import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';

// Define a type for the slice state
interface ContactState {

}

// Define the initial state using that type
const initialState: ContactState = {

};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
  },
});

// export const { } = contactSlice.actions;

export default contactSlice.reducer;
