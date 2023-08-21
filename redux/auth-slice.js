import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./auth-operations";

const initialState = {
  userId: null,
  userName: null,
  userEmail: null,
  userAvatarUrl: null,
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledRegister = (
  state,
  { payload: { uid, displayName, email, photoURL } }
) => {
  state.isLoading = false;
  state.error = null;
  state.userId = uid;
  state.userName = displayName;
  state.userEmail = email;
  state.userAvatarUrl = photoURL;
};

const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.userId = payload.uid;
  state.userName = payload.displayName;
  state.userEmail = payload.email;
  state.isLoggedIn = true;
  state.token = payload.accessToken;
  state.userAvatarUrl = payload.photoURL;
};

const handleFulfilledLogout = (state) => {
  state.isLoading = false;
  state.error = null;
  state.userId = null;
  state.userName = null;
  state.userEmail = null;
  state.token = null;
  state.isLoggedIn = false;
  state.userAvatarUrl = null;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleFulfilledRegister)
      .addCase(login.fulfilled, handleFulfilledLogin)
      .addCase(logout.fulfilled, handleFulfilledLogout)
      .addMatcher(({ type }) => type.endsWith("/pending"), handlePending)
      .addMatcher(({ type }) => type.endsWith("/rejected"), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
