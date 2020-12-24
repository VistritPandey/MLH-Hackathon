import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userProfile: null,
  },
  reducers: {
    login: (state, action) => {
      state.userProfile = action.payload;
    },
    logout: (state) => {
      state.userProfile = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.userProfile.userProfile;

export default userSlice.reducer;
