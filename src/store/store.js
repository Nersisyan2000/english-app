import { configureStore } from "@reduxjs/toolkit";
import {
  loginSlice,
  nativeLanguageCreateSlice,
  nativeLanguageGetSlice,
  categoryCreateSlice,
  userCreateSlice,
  userDeleteSlice,
  userUpdateSlice,
  userGetAllSlice,
  userGetByIdSlice,
  categoryDeleteSlice,
  categoryGetSlice,
  nativeLanguageDeleteSlice,
  nativeLanguageUpdateSlice,
} from "./slices";
import { categoryUpdateSlice } from "./slices/category/update-category";
import { learningLanguagesSlice } from "./slices/lern-language/learn-languages-slice";

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice.reducer,
    createNativeSlice: nativeLanguageCreateSlice.reducer,
    getNativeSlice: nativeLanguageGetSlice.reducer,
    nativeLanguageDeleteSlice: nativeLanguageDeleteSlice.reducer,
    nativeLanguageUpdateSlice: nativeLanguageUpdateSlice.reducer,
    categoryCreateSlice: categoryCreateSlice.reducer,
    userCreateSlice: userCreateSlice.reducer,
    userDeleteSlice: userDeleteSlice.reducer,
    userUpdateSlice: userUpdateSlice.reducer,
    userGetAllSlice: userGetAllSlice.reducer,
    userGetByIdSlice: userGetByIdSlice.reducer,
    categoryDeleteSlice: categoryDeleteSlice.reducer,
    categoryUpdateSlice: categoryUpdateSlice.reducer,
    categoryGetSlice: categoryGetSlice.reducer,
    learningLanguagesSlice: learningLanguagesSlice.reducer,
  },
});
