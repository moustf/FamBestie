import {
  createSlice, createSelector, createAsyncThunk,
} from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { UserData, InitialState } from '../../utils/interfaces/redux';

const initialState: InitialState = {
  userData: {
    id: 0,
    name: '',
    role: '',
  },
  isLoading: true,
  error: '',
};

// ? Action creator function START.

export const createUserDataAction = (payload: any): {
  type: string, payload: UserData,
} => ({
  type: 'auth/setUserData',
  payload,
});

export const createErrorAction = (payload: unknown): {
  type: string, payload: unknown,
} => ({
  type: 'auth/setError',
  payload,
});

// ? Action creator function END.

// ? State selector function START.

export const selectUserData = createSelector(
  // * First, pass one or more "input selector" functions.
  (state: { authReducer: InitialState; }) => state.authReducer.userData,
  // * Then the return output, we can do any logic with it.
  (userData) => userData,
);

export const selectError = createSelector(
  (state: { authReducer: InitialState; }) => state.authReducer.error,
  (error) => error,
);

// ? State selector function END.

// ? Thunk function and its fetch helper function START.

const fetchUserData = async (): Promise<AxiosResponse<UserData, unknown>> => (
  axios.get('/auth/user')
);
export const setUserData = createAsyncThunk('auth/setUserData', fetchUserData);

const logout = async (): Promise<AxiosResponse<UserData, unknown>> => (
  axios.post('/auth/logout')
);

export const clearUserData = createAsyncThunk('auth/clearUserData', logout);

// ? Thunk function and its fetch helper function END.

// ! The main auth slice.
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUserData.fulfilled, (state, action) => {
      state.userData = action.payload.data.data;
      state.isLoading = false;
    });
    builder.addCase(setUserData.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });

    builder.addCase(clearUserData.fulfilled, (state) => {
      state.userData = { id: 0, name: '', role: '' };
      state.isLoading = false;
    });
    builder.addCase(clearUserData.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

// ? Thunk function and its fetch helper function END.

// ? Exporting the main auth slice reducer.
export const authReducer = authSlice.reducer;
