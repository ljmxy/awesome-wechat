import {createSlice} from '@reduxjs/toolkit';
import {ContactItemType} from './contactTypes';

// Define a type for the slice state
interface ContactState {
  contacts: ContactItemType[];
}

// Define the initial state using that type
const initialState: ContactState = {
  contacts: [
    {
      id: '1',
      name: 'tom',
    },
    {
      id: '2',
      name: 'tom2',
    },
    {
      id: '3',
      name: 'tom3',
    },
    {
      id: '4',
      name: 'tom4',
    },
  ],
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
});

// export const { } = contactSlice.actions;

export default contactSlice.reducer;
