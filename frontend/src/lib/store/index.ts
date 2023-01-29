import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./auth";

const GlobalStore = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export type GlobalStoreType = ReturnType<typeof GlobalStore.getState>;
export type GlobalStoreDispatchType = typeof GlobalStore.dispatch;

export default GlobalStore;
