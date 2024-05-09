import { configureStore } from "@reduxjs/toolkit";
import { loginSlice, nativeLanguageCreateSlice, nativeLanguageGetSlice } from "./slices";

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice.reducer,
    createNativeSlice : nativeLanguageCreateSlice.reducer,
    getNativeSlice : nativeLanguageGetSlice.reducer,

  },
});
