import {createSlice} from '@reduxjs/toolkit';
import {signIn} from './registerActions';

// Define a type for the slice state
interface RegisterState {
  isSignIn: boolean;
  username: string | undefined;
}

// Define the initial state using that type
const initialState: RegisterState = {
  isSignIn: false,
  username: undefined,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signIn.fulfilled, (state: RegisterState, {payload}) => {
        console.log('signIn 🚀 ~ fulfilled', payload);
        state.isSignIn = true;
      })
      .addCase(signIn.rejected, () => {
        throw new Error('signIn 🔥 ~ rejected');
      });
  },
});

// export const {afterSignIn} = registerSlice.actions;

export default registerSlice.reducer;
