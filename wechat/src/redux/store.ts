import { configureStore } from '@reduxjs/toolkit';
import entryReducer from '../modules/entry/entrySlice';
import registerReducer from '../modules/register/registerSlice';
import contactReducer from '../modules/contact/contactSlice';
import conversationReducer from '../modules/conversation/conversationSlice';
import settingReducer from '../modules/setting/settingSlice';


const store = configureStore({
  reducer: {
    entry: entryReducer,
    register: registerReducer,
    contact: contactReducer,
    conversation: conversationReducer,
    setting: settingReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
