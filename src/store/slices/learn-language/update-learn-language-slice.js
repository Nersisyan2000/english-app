import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { learnLanguageUpdateService } from "../../../services";

const initialState = {
  learnLanguageUpdateLoading: false,
  learnLanguageUpdateResponse: null,
  learnLanguageUpdateError: null,
};

export const learnLanguageUpdateThunk = createAsyncThunk(
  "updateLearnLanguage",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await learnLanguageUpdateService(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const learnLanguageUpdateSlice = createSlice({
  name: "updateLearnLanguage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(learnLanguageUpdateThunk.pending, (state) => {
      state.learnLanguageUpdateLoading = true;
    });
    builder.addCase(
      learnLanguageUpdateThunk.fulfilled,
      (state, { payload }) => {
        state.learnLanguageUpdateLoading = false;
        state.learnLanguageUpdateResponse = payload;
      }
    );
    builder.addCase(learnLanguageUpdateThunk.rejected, (state, { payload }) => {
      state.learnLanguageUpdateLoading = false;
      state.learnLanguageUpdateError = payload;
    });
  },
});

export const getUpdatedLearnLanguageLoading = (state) => {
  return state.learnLanguageUpdateSlice.learnLanguageUpdateLoading;
};

export const getUpdatedLearnLanguageResponse = (state) => {
  return state.learnLanguageUpdateSlice.learnLanguageUpdateResponse;
};

export const getUpdatedLearnLanguageError = (state) => {
  return state.learnLanguageUpdateSlice.learnLanguageUpdateError;
};
