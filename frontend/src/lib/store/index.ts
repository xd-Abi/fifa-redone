import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./user";

const GlobalStore = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export type GlobalStoreType = ReturnType<typeof GlobalStore.getState>;
export type GlobalStoreDispatchType = typeof GlobalStore.dispatch;

export default GlobalStore;
