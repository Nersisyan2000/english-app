import { configureStore } from "@reduxjs/toolkit";
import { loginSlice, nativeLanguageCreateSlice, nativeLanguageGetSlice } from "./slices";
import { categoryCreateSlice } from "./slices/category/category-create";

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice.reducer,
    createNativeSlice : nativeLanguageCreateSlice.reducer,
    getNativeSlice : nativeLanguageGetSlice.reducer,
    categoryCreateSlice:categoryCreateSlice.reducer

  },
});
