import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';

// Define a type for the slice state
interface SettingState {
  languageOptions: string[],
}

// Define the initial state using that type
const initialState: SettingState = {
  languageOptions: ['en-US', 'zh-CN'],
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
  },
});

// export const { } = settingSlice.actions;

export default settingSlice.reducer;
