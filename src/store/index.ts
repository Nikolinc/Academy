import { configureStore } from "@reduxjs/toolkit";
import SoundSlices from "./slices/SoundSlices";

const store = configureStore({
  reducer: {
    SoundList: SoundSlices.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
