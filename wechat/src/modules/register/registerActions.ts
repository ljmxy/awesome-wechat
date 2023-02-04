import {APP_STORAGE_KEYS} from '@constants/common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {SignInDataType} from './registerTypes';

export const signIn = createAsyncThunk(
  'user/signIn',
  async (payload: SignInDataType) => {
    // const result = await signinApi(payload);
    const result = {
      ...payload,
    };
    return result;
  },
);

export const afterSignIn = createAsyncThunk(
  'user/afterSignIn',
  async (payload: string) => {
    return Promise.all([
      AsyncStorage.setItem(APP_STORAGE_KEYS.isSignIn, String(true)),
      AsyncStorage.setItem(APP_STORAGE_KEYS.username, payload),
    ]);
  },
);
