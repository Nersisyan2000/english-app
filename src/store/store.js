import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices/auth/login-slice";

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice.reducer,
  },
});
