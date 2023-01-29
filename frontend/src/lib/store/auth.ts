import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models";

export type AuthSliceType = {
  user?: User | undefined;
};

export const AuthSlice = createSlice({
  name: "user",
  initialState: { user: undefined, isAuthenticated: false } as AuthSliceType,
  reducers: {
    userChange: (state, action: PayloadAction<AuthSliceType>) => {
      state.user = action.payload.user;
    },
  },
});

export const AuthReducer = AuthSlice.reducer;
export const { userChange } = AuthSlice.actions;
