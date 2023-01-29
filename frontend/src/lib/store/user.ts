import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models";

export type UserSliceType = {
  user?: User | undefined;
};

export const UserSlice = createSlice({
  name: "user",
  initialState: {} as UserSliceType,
  reducers: {
    userChange: (state, action: PayloadAction<UserSliceType>) => {
      state.user = action.payload.user;
    },
  },
});

export const UserReducer = UserSlice.reducer;
export const { userChange } = UserSlice.actions;
